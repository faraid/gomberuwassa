import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma';

// ─── Prisma v7 requires a driver adapter ─────────────────────────────────────
// The embedded query engine was removed in Prisma 7. We use the official
// @prisma/adapter-pg adapter backed by a pg.Pool.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const pool = new Pool({
    connectionString:
      process.env.DATABASE_URL ??
      'postgresql://user:password@localhost:5432/gombe_ruwasa',
  });

  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export async function verifyConnection(): Promise<void> {
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch (err) {
    console.error('FATAL: Database connection failed', err);
    process.exit(1);
  }
}

export default prisma;
