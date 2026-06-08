'use client';

import { useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Loader2, AlertCircle } from 'lucide-react';

/**
 * LoginForm uses useSearchParams() to read the `from` redirect target.
 * It must be rendered inside a <Suspense> boundary (handled by the page).
 */
export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') ?? '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const json = (await res.json()) as {
        data?: { fullName?: string };
        error?: { message?: string };
      };

      if (!res.ok) {
        setError(json.error?.message ?? 'Login failed. Please try again.');
        return;
      }

      router.replace(from);
    } catch {
      setError('A network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Branding */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-16 h-16 mb-3">
            <Image
              src="/brand-logo.png"
              alt="RUWASA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">RUWASA CMS</h1>
          <p className="text-sm text-gray-500 mt-1">Gombe State Admin Portal</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Sign in to your account
          </h2>

          {error && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="you@ruwasa.go.ng"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-end">
              <a
                href="/admin/forgot-password"
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Gombe State Rural Water Supply and Sanitation Agency
        </p>
      </div>
    </div>
  );
}
