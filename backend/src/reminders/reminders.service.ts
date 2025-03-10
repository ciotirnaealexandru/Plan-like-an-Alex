import { Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RemindersService {
  constructor(private prisma: PrismaService) {}

  create(createReminderDto: CreateReminderDto) {
    return this.prisma.reminder.create({ data: { ...createReminderDto } });
  }

  findAll() {
    return this.prisma.reminder.findMany({
      where: { published: true },
      include: {
        author: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.reminder.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  update(id: number, updateReminderDto: UpdateReminderDto) {
    return this.prisma.reminder.update({
      where: { id },
      data: updateReminderDto,
      include: {
        author: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.reminder.delete({
      where: { id },
      include: {
        author: true,
      },
    });
  }
}
