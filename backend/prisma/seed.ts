// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@gmail.com' },
    update: {},
    create: {
      email: 'user1@gmail.com',
      phone: '0000 000 000',
      firstName: 'first1',
      lastName: 'last1',
      password: 'password',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user2@gmail.com' },
    update: {},
    create: {
      email: 'user2@gmail.com',
      phone: '0000 000 000',
      firstName: 'first2',
      lastName: 'last2',
      password: 'password',
    },
  });

  // create three dummy reminders
  const reminder1 = await prisma.reminder.upsert({
    where: {
      id: 1,
    },
    update: { authorId: user1.id },
    create: {
      title: 'title1',
      published: true,
      done: false,
      authorId: user1.id,
    },
  });

  const reminder2 = await prisma.reminder.upsert({
    where: {
      id: 2,
    },
    update: { authorId: user2.id },
    create: {
      title: 'title2',
      published: true,
      done: false,
      authorId: user2.id,
    },
  });

  const reminder3 = await prisma.reminder.upsert({
    where: {
      id: 3,
    },
    update: { authorId: user2.id },
    create: {
      title: 'title3',
      published: true,
      done: false,
      authorId: user2.id,
    },
  });

  console.log({ user1, user2, reminder1, reminder2, reminder3 });
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
