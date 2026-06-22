import 'dotenv/config';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@ruwasa.go.ng';
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    console.log(`✗ Admin user "${email}" not found. Run seed first.`);
    process.exit(1);
  }

  console.log('Found:', user.email);
  console.log('  lockedAt:       ', user.lockedAt);
  console.log('  failedAttempts: ', user.failedAttempts);

  await prisma.user.update({
    where: { id: user.id },
    data: { lockedAt: null, failedAttempts: 0 },
  });

  console.log('✓ Account unlocked. failedAttempts reset to 0.');
  console.log('You can now log in with the correct credentials.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
