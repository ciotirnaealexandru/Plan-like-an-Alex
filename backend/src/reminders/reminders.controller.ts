import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReminderEntity } from './entities/reminder.entity';

@Controller('reminders')
@ApiTags('Reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @ApiCreatedResponse({ type: ReminderEntity })
  create(@Body() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ReminderEntity, isArray: true })
  findAll() {
    return this.remindersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ReminderEntity })
  findOne(@Param('id') id: string) {
    return this.remindersService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ReminderEntity })
  update(
    @Param('id') id: string,
    @Body() updateReminderDto: UpdateReminderDto,
  ) {
    return this.remindersService.update(+id, updateReminderDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ReminderEntity })
  remove(@Param('id') id: string) {
    return this.remindersService.remove(+id);
  }
}
