import { Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RemindersService {
  constructor(private prisma: PrismaService) {}

  create(createReminderDto: CreateReminderDto, userId: number) {
    return this.prisma.reminder.create({
      data: { ...createReminderDto, authorId: userId },
    });
  }

  findAll(user) {
    const isAdmin = user.role === 'ADMIN';

    return this.prisma.reminder.findMany({
      where: isAdmin ? {} : { authorId: user.userId },
      include: isAdmin ? { author: true } : undefined,
    });
  }

  findOne(id: number, user) {
    const isAdmin = user.role === 'ADMIN';

    return this.prisma.reminder.findUnique({
      where: { id, ...(isAdmin ? {} : { authorId: user.userId }) },
      include: isAdmin ? { author: true } : undefined,
    });
  }

  update(id: number, updateReminderDto: UpdateReminderDto, user) {
    const isAdmin = user.role === 'ADMIN';

    return this.prisma.reminder.update({
      where: { id, ...(isAdmin ? {} : { authorId: user.userId }) },
      data: updateReminderDto,
      include: isAdmin ? { author: true } : undefined,
    });
  }

  remove(id: number, user) {
    const isAdmin = user.role === 'ADMIN';

    return this.prisma.reminder.delete({
      where: { id, ...(isAdmin ? {} : { authorId: user.userId }) },
    });
  }
}
