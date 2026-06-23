'use client';

import { useState, useRef, useCallback } from 'react';
import { ImagePlus, Loader2, Trash2, AlertCircle } from 'lucide-react';

type UploadModule = 'projects' | 'news' | 'programs' | 'gallery' | 'homepage';

interface HomepageImageUploadProps {
  module: UploadModule;
  inputName: string;
  currentUrl?: string;
  label?: string;
  onUploadComplete?: (url: string) => void;
}

export default function HomepageImageUpload({
  module,
  inputName,
  currentUrl,
  label,
  onUploadComplete,
}: HomepageImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentUrl ?? null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>(currentUrl ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setError('Unsupported file type. Use JPEG, PNG, WEBP, or GIF.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('File exceeds 5 MB limit.');
        return;
      }
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setError(null);
      setUploading(true);
      try {
        const body = new FormData();
        body.append('file', file);
        body.append('module', module);
        const res = await fetch('/api/upload', { method: 'POST', body });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');
        setUploadedUrl(data.url);
        setPreview(data.url);
        onUploadComplete?.(data.url);
        URL.revokeObjectURL(objectUrl);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Upload failed';
        setError(msg);
        if (currentUrl) { setPreview(currentUrl); setUploadedUrl(currentUrl); }
        else { setPreview(null); setUploadedUrl(''); }
      } finally {
        setUploading(false);
      }
    },
    [module, currentUrl, onUploadComplete],
  );

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  function clearImage() {
    setPreview(null);
    setUploadedUrl('');
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className="space-y-2">
      {label && <p className="text-sm font-medium text-gray-700">{label}</p>}
      <input type="hidden" name={inputName} value={uploadedUrl} />
      <div
        className={
          `relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors cursor-pointer ${
            preview ? 'border-blue-300 bg-blue-50/20 p-2' : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/30 p-6'
          } ${
            uploading ? 'pointer-events-none opacity-60' : ''
          }`
        }
        onClick={() => !uploading && inputRef.current?.click()}
      >
        {preview ? (
          <div className="relative w-full max-h-48 overflow-hidden rounded-md">
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-md" />
            {uploading && <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-md"><Loader2 className="w-6 h-6 animate-spin text-white" /></div>}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-gray-400">
            <ImagePlus className="w-8 h-8" />
            <p className="text-sm font-medium">Click or drag to upload</p>
            <p className="text-xs">JPEG, PNG, WEBP or GIF - max 5 MB</p>
          </div>
        )}
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="hidden" onChange={handleFileChange} />
      </div>
      {preview && !uploading && (
        <button type="button" onClick={(e) => { e.stopPropagation(); clearImage(); }} className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700">
          <Trash2 className="w-3 h-3" /> Remove image
        </button>
      )}
      {error && <div className="flex items-start gap-1.5 text-xs text-red-600 bg-red-50 rounded px-2 py-1.5"><AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" /><span>{error}</span></div>}
    </div>
  );
}
