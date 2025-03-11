// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  // create admin
  const adminpassword = await bcrypt.hash('password', roundsOfHashing);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {
      password: adminpassword,
    },
    create: {
      email: 'admin@gmail.com',
      phone: '0000 000 000',
      firstName: 'adminfirst',
      lastName: 'adminlast',
      password: adminpassword,
      role: 'ADMIN',
    },
  });

  // create two dummy users
  const password1 = await bcrypt.hash('password', roundsOfHashing);
  const password2 = await bcrypt.hash('password', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'user1@gmail.com' },
    update: {
      password: password1,
    },
    create: {
      email: 'user1@gmail.com',
      phone: '0000 000 000',
      firstName: 'first1',
      lastName: 'last1',
      password: password1,
      role: 'USER',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user2@gmail.com' },
    update: {
      password: password2,
    },
    create: {
      email: 'user2@gmail.com',
      phone: '0000 000 000',
      firstName: 'first2',
      lastName: 'last2',
      password: password2,
      role: 'USER',
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

  console.log({ admin, user1, user2, reminder1, reminder2, reminder3 });
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
