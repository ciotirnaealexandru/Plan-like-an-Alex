// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy reminders
  const reminder1 = await prisma.reminder.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      title:
        'Support for MongoDB has been one of the most requested features since the initial release of...',
      published: true,
      done: false,
    },
  });

  const reminder2 = await prisma.reminder.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      title:
        'Our engineers have been working hard, issuing new releases with many improvements...',
      published: true,
      done: false,
    },
  });

  console.log({ reminder1, reminder2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
