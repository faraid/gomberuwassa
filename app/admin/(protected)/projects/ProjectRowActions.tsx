'use client';

import { useState, useTransition, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { deleteProjectAction } from './actions';

interface ProjectMini {
  id: string;
  title: string;
}

interface Props {
  project: ProjectMini;
}

interface MenuPos {
  top: number;
  right: number;
}

export default function ProjectRowActions({ project }: Props) {
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<MenuPos>({ top: 0, right: 0 });
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openMenu = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const menuHeight = 96;
    const maxTop = window.innerHeight - menuHeight - 8;
    setMenuPos({
      top: Math.min(rect.bottom + 4, maxTop),
      right: window.innerWidth - rect.right,
    });
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [open]);

  function handleDelete() {
    setOpen(false);
    if (!confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
    startTransition(async () => {
      const result = await deleteProjectAction(project.id);
      if (result.error) setError(result.error);
    });
  }

  const menu = open ? (
    <>
      <div className="fixed inset-0 z-[9998]" onClick={() => setOpen(false)} />
      <div
        className="fixed z-[9999] bg-white border border-gray-200 rounded-xl shadow-lg py-1 w-44 text-sm"
        style={{ top: menuPos.top, right: menuPos.right }}
      >
        <Link
          href={`/admin/projects/${project.id}/edit`}
          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-gray-700"
          onClick={() => setOpen(false)}
        >
          <Pencil className="w-3.5 h-3.5 text-gray-400" />
          Edit
        </Link>

        <div className="border-t border-gray-100 my-1" />
        <button
          type="button"
          onClick={handleDelete}
          className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 text-red-600"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Delete
        </button>
      </div>
    </>
  ) : null;

  return (
    <div className="flex justify-end items-center">
      {error && <p className="text-xs text-red-600 mr-2">{error}</p>}

      <button
        ref={buttonRef}
        type="button"
        onClick={openMenu}
        disabled={isPending}
        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Actions"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>

      {typeof document !== 'undefined' && menu
        ? createPortal(menu, document.body)
        : null}
    </div>
  );
}
