'use client';

import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import { updateUserAction, type ActionState } from '../../actions';
import { Role } from '@/generated/prisma';

const ROLES = ['Super_Admin', 'Editor', 'Viewer'] as const;

const initialState: ActionState = {};

interface Props {
  userId: string;
  defaultFullName: string;
  defaultRole: Role;
  isSelf: boolean;
}

export default function EditUserForm({ userId, defaultFullName, defaultRole, isSelf }: Props) {
  const boundAction = updateUserAction.bind(null, userId);
  const [state, formAction, pending] = useActionState(boundAction, initialState);

  return (
    <form action={formAction} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          defaultValue={defaultFullName}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {state.fieldErrors?.fullName && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.fullName[0]}</p>
        )}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
          Role <span className="text-red-500">*</span>
        </label>
        <select
          id="role"
          name="role"
          required
          defaultValue={defaultRole}
          disabled={isSelf}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          {ROLES.map((r) => (
            <option key={r} value={r}>{r.replace('_', ' ')}</option>
          ))}
        </select>
        {/* Hidden field when select is disabled to ensure value is submitted */}
        {isSelf && <input type="hidden" name="role" value={defaultRole} />}
        {isSelf && (
          <p className="text-xs text-amber-600 mt-1">You cannot change your own role.</p>
        )}
        {state.fieldErrors?.role && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.role[0]}</p>
        )}
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? 'Saving…' : 'Save Changes'}
        </button>
        <a
          href="/admin/users"
          className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
