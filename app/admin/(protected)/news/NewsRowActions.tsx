'use client';

import { useState, useTransition, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { MoreHorizontal, Pencil, Trash2, Globe, EyeOff } from 'lucide-react';
import {
  publishArticleAction,
  unpublishArticleAction,
  deleteArticleAction,
} from './actions';

interface ArticleMini {
  id: string;
  title: string;
  status: string;
}

interface Props {
  article: ArticleMini;
  canPublish: boolean;
}

interface MenuPos {
  top: number;
  right: number;
}

export default function NewsRowActions({ article, canPublish }: Props) {
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<MenuPos>({ top: 0, right: 0 });
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isPublished = article.status === 'published';

  // Calculate fixed position from the trigger button
  const openMenu = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const menuWidth = 176; // w-44 = 11rem = 176px
    setMenuPos({
      top: rect.bottom + 4,
      right: window.innerWidth - rect.right,
    });
    // Clamp top so menu stays within viewport
    const menuHeight = canPublish ? 128 : 96;
    const maxTop = window.innerHeight - menuHeight - 8;
    setMenuPos({
      top: Math.min(rect.bottom + 4, maxTop),
      right: window.innerWidth - rect.right,
    });
    void menuWidth; // used indirectly via right offset
    setOpen(true);
  }, [canPublish]);

  // Close on scroll or resize so the menu doesn't float away from its anchor
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

  function handleTogglePublish() {
    setOpen(false);
    const label = isPublished ? 'Unpublish' : 'Publish';
    if (!confirm(`${label} "${article.title}"?`)) return;
    startTransition(async () => {
      const result = isPublished
        ? await unpublishArticleAction(article.id)
        : await publishArticleAction(article.id);
      if (result.error) setError(result.error);
    });
  }

  function handleDelete() {
    setOpen(false);
    if (!confirm(`Delete "${article.title}"? This cannot be undone.`)) return;
    startTransition(async () => {
      const result = await deleteArticleAction(article.id);
      if (result.error) setError(result.error);
    });
  }

  const menu = open ? (
    <>
      {/* Backdrop — closes menu on outside click */}
      <div className="fixed inset-0 z-[9998]" onClick={() => setOpen(false)} />

      {/* Menu rendered via portal so it escapes any overflow:hidden ancestor */}
      <div
        className="fixed z-[9999] bg-white border border-gray-200 rounded-xl shadow-lg py-1 w-44 text-sm"
        style={{ top: menuPos.top, right: menuPos.right }}
      >
        <Link
          href={`/admin/news/${article.id}/edit`}
          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-gray-700"
          onClick={() => setOpen(false)}
        >
          <Pencil className="w-3.5 h-3.5 text-gray-400" />
          Edit
        </Link>

        {canPublish && (
          <button
            type="button"
            onClick={handleTogglePublish}
            className={`flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 ${
              isPublished ? 'text-amber-600' : 'text-green-600'
            }`}
          >
            {isPublished
              ? <><EyeOff className="w-3.5 h-3.5" /><span>Unpublish</span></>
              : <><Globe className="w-3.5 h-3.5" /><span>Publish</span></>
            }
          </button>
        )}

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

      {/* Portal — renders outside the table so no overflow clipping */}
      {typeof document !== 'undefined' && menu
        ? createPortal(menu, document.body)
        : null}
    </div>
  );
}
