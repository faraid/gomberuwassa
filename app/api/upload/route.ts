import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// â”€â”€â”€ Allowed upload targets â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const ALLOWED_TARGETS = ['projects', 'news', 'programs', 'gallery', 'homepage', 'about'] as const;
type UploadTarget = (typeof ALLOWED_TARGETS)[number];

// â”€â”€â”€ POST â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const target = (formData.get('module') as string) || 'projects';

    if (!file) {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
    }

    if (!ALLOWED_TARGETS.includes(target as UploadTarget)) {
      return NextResponse.json(
        { error: `Invalid target "${target}". Allowed: ${ALLOWED_TARGETS.join(', ')}` },
        { status: 400 },
      );
    }

    // Validate file type
    const allowedTypes = target === 'about'
      ? ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf']
      : ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: `Unsupported file type "${file.type}". Allowed: ${allowedTypes.join(', ')}` },
        { status: 400 },
      );
    }

    // 5 MB limit
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'File exceeds 5 MB limit.' },
        { status: 400 },
      );
    }

    // Save to /public/uploads/{target}/
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', target);
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const ext = path.extname(file.name) || '.jpg';
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    const filePath = path.join(uploadDir, safeName);

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);

    // Return the public URL path
    const url = `/uploads/${target}/${safeName}`;

    return NextResponse.json({ url, fileName: safeName });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 });
  }
}


