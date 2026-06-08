'use client';

import { Suspense } from 'react';
import LoginForm from './LoginForm';

/**
 * The page shell wraps LoginForm in Suspense so that Next.js can statically
 * render this route. LoginForm uses useSearchParams() which requires a
 * Suspense boundary in Next.js 15 App Router.
 */
export default function AdminLoginPage() {
  return (
    <Suspense fallback={<LoginPageSkeleton />}>
      <LoginForm />
    </Suspense>
  );
}

function LoginPageSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 mb-3 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-7 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-44 bg-gray-100 rounded animate-pulse mt-2" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-4">
          <div className="h-6 w-48 bg-gray-100 rounded animate-pulse" />
          <div className="h-10 bg-gray-100 rounded-lg animate-pulse" />
          <div className="h-10 bg-gray-100 rounded-lg animate-pulse" />
          <div className="h-10 bg-blue-100 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}
