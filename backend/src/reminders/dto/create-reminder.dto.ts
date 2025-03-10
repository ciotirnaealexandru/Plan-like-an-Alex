import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  MaxLength,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateReminderDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty()
  title: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: true })
  published?: boolean = true;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  done?: boolean = false;

  @ApiProperty()
  @IsInt()
  authorId: number;
}
