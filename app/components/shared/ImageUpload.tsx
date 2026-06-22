'use client';

import { useState, useRef, useCallback } from 'react';
import { ImagePlus, Loader2, Trash2, AlertCircle } from 'lucide-react';

type UploadModule = 'projects' | 'news' | 'programs' | 'gallery';

interface ImageUploadProps {
  /** Module folder under /public/uploads/ where the file will be saved */
  module: UploadModule;
  /** Name for the hidden input that will hold the resulting URL */
  inputName: string;
  /** Optional existing image URL to show as the current value */
  currentUrl?: string;
  /** Optional label displayed above the upload area */
  label?: string;
  /** Called when the upload completes and a URL is available */
  onUploadComplete?: (url: string) => void;
}

/**
 * Reusable image upload component with preview.
 *
 * Features:
 * - Drag-and-drop or click-to-upload
 * - Image preview before and after upload
 * - Uploads via POST /api/upload → stores in /public/uploads/{module}/
 * - Stores the resulting URL in a hidden input for form submission
 * - 5 MB file limit, JPEG/PNG/WEBP/GIF only
 * - Fully reusable across Projects, News, Programs, Gallery, and future CMS modules
 */
export default function ImageUpload({
  module,
  inputName,
  currentUrl,
  label,
  onUploadComplete,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentUrl ?? null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>(currentUrl ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      // Validate type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setError(`Unsupported file type. Use JPEG, PNG, WEBP, or GIF.`);
        return;
      }

      // Validate size
      if (file.size > 5 * 1024 * 1024) {
        setError('File exceeds 5 MB limit.');
        return;
      }

      // Show local preview immediately
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

        if (!res.ok) {
          throw new Error(data.error || 'Upload failed');
        }

        setUploadedUrl(data.url);
        setPreview(data.url); // switch from object URL to permanent URL
        onUploadComplete?.(data.url);
        URL.revokeObjectURL(objectUrl); // clean up
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Upload failed';
        setError(msg);
        // Revert to previous
        if (currentUrl) {
          setPreview(currentUrl);
          setUploadedUrl(currentUrl);
        } else {
          setPreview(null);
          setUploadedUrl('');
        }
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

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function clearImage() {
    setPreview(null);
    setUploadedUrl('');
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className="space-y-2">
      {label && (
        <p className="text-sm font-medium text-gray-700">{label}</p>
      )}

      {/* Hidden input for form submission — holds the uploaded URL */}
      <input type="hidden" name={inputName} value={uploadedUrl} />

      {/* Upload / Preview area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`
          relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed
          transition-colors cursor-pointer
          ${preview ? 'border-blue-300 bg-blue-50/20 p-2' : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/30 p-6'}
          ${uploading ? 'pointer-events-none opacity-60' : ''}
        `}
        onClick={() => !uploading && inputRef.current?.click()}
      >
        {preview ? (
          <div className="relative w-full max-h-48 overflow-hidden rounded-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Upload preview"
              className="w-full h-48 object-cover rounded-md"
            />
            {uploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-md">
                <Loader2 className="w-6 h-6 animate-spin text-white" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-gray-400">
            <ImagePlus className="w-8 h-8" />
            <p className="text-sm font-medium">Click or drag to upload</p>
            <p className="text-xs">JPEG, PNG, WEBP or GIF — max 5 MB</p>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Clear button when image is set */}
      {preview && !uploading && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            clearImage();
          }}
          className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 transition-colors"
        >
          <Trash2 className="w-3 h-3" />
          Remove image
        </button>
      )}

      {/* Error message */}
      {error && (
        <div className="flex items-start gap-1.5 text-xs text-red-600 bg-red-50 rounded px-2 py-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Uploaded URL hint */}
      {uploadedUrl && !error && (
        <p className="text-[10px] text-gray-400 truncate">
          {uploadedUrl}
        </p>
      )}
    </div>
  );
}
