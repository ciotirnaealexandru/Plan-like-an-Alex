import { Reminder } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ReminderEntity implements Reminder {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  done: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
