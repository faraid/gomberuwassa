'use client';

import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import { createUserAction, type ActionState } from '../actions';

const ROLES = ['Super_Admin', 'Editor', 'Viewer'] as const;

const initialState: ActionState = {};

export default function CreateUserForm() {
  const [state, formAction, pending] = useActionState(createUserAction, initialState);

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
          autoComplete="off"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Aminu Musa"
        />
        {state.fieldErrors?.fullName && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.fullName[0]}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="off"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="user@ruwasa.go.ng"
        />
        {state.fieldErrors?.email && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.email[0]}</p>
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
          defaultValue="Editor"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {ROLES.map((r) => (
            <option key={r} value={r}>{r.replace('_', ' ')}</option>
          ))}
        </select>
        {state.fieldErrors?.role && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.role[0]}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">
          Super_Admin: full access · Editor: create/edit content · Viewer: read-only
        </p>
      </div>

      {/* Temporary password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Temporary Password <span className="text-red-500">*</span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="new-password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Min. 8 characters"
        />
        {state.fieldErrors?.password && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.password[0]}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">
          Share this with the user. They should change it on first login.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? 'Creating…' : 'Create User'}
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
