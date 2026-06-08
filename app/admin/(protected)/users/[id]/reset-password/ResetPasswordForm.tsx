'use client';

import { useActionState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { adminResetPasswordAction, type ActionState } from '../../actions';

const initialState: ActionState = {};

interface Props {
  userId: string;
}

export default function ResetPasswordForm({ userId }: Props) {
  const boundAction = adminResetPasswordAction.bind(null, userId);
  const [state, formAction, pending] = useActionState(boundAction, initialState);

  if (state.success) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 text-green-700">
          <CheckCircle className="w-5 h-5" />
          <p className="font-medium">Password reset successfully.</p>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          The user&apos;s sessions have been invalidated. They must log in with the new password.
        </p>
        <a
          href="/admin/users"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          Back to Users
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
          New Password <span className="text-red-500">*</span>
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          autoComplete="new-password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Min. 8 characters"
        />
        {state.fieldErrors?.newPassword && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.newPassword[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          autoComplete="new-password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Repeat password"
        />
        {state.fieldErrors?.confirmPassword && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.confirmPassword[0]}</p>
        )}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-700">
        This will immediately invalidate all active sessions for this user.
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? 'Resetting…' : 'Reset Password'}
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
