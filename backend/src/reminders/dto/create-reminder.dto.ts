import { ApiProperty } from '@nestjs/swagger';

export class CreateReminderDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, default: true })
  published?: boolean = true;

  @ApiProperty({ required: false, default: false })
  done?: boolean = false;
}
