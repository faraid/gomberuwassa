'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { MoreHorizontal, Pencil, UserX, UserCheck, LockOpen, KeyRound } from 'lucide-react';
import { toggleUserActiveAction, unlockUserAction } from './actions';

interface UserMini {
  id: string;
  fullName: string;
  role: string;
  active: boolean;
  locked: boolean;
}

interface Props {
  user: UserMini;
  currentUserId: string;
  isLastSuperAdmin: boolean;
}

export default function UserRowActions({ user, currentUserId, isLastSuperAdmin }: Props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const isSelf = user.id === currentUserId;

  function handleToggle() {
    setOpen(false);
    if (!confirm(
      user.active
        ? `Deactivate ${user.fullName}? They will be signed out immediately.`
        : `Activate ${user.fullName}?`
    )) return;

    startTransition(async () => {
      const result = await toggleUserActiveAction(user.id, !user.active);
      if (result.error) setError(result.error);
    });
  }

  function handleUnlock() {
    setOpen(false);
    startTransition(async () => {
      const result = await unlockUserAction(user.id);
      if (result.error) setError(result.error);
    });
  }

  return (
    <div className="relative flex justify-end">
      {error && (
        <p className="text-xs text-red-600 mr-2 self-center">{error}</p>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        disabled={isPending}
        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Actions"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />
          {/* Menu */}
          <div className="absolute right-0 top-8 z-20 bg-white border border-gray-200 rounded-xl shadow-lg py-1 w-44 text-sm">
            <Link
              href={`/admin/users/${user.id}/edit`}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-gray-700"
              onClick={() => setOpen(false)}
            >
              <Pencil className="w-3.5 h-3.5 text-gray-400" />
              Edit
            </Link>

            <Link
              href={`/admin/users/${user.id}/reset-password`}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-gray-700"
              onClick={() => setOpen(false)}
            >
              <KeyRound className="w-3.5 h-3.5 text-gray-400" />
              Reset Password
            </Link>

            {user.locked && (
              <button
                type="button"
                onClick={handleUnlock}
                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 text-amber-600"
              >
                <LockOpen className="w-3.5 h-3.5" />
                Unlock Account
              </button>
            )}

            {!isSelf && !isLastSuperAdmin && (
              <>
                <div className="border-t border-gray-100 my-1" />
                <button
                  type="button"
                  onClick={handleToggle}
                  className={`flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 ${
                    user.active ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {user.active
                    ? <><UserX className="w-3.5 h-3.5" /> Deactivate</>
                    : <><UserCheck className="w-3.5 h-3.5" /> Activate</>
                  }
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
