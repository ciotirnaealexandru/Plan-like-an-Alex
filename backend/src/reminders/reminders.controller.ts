import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReminderEntity } from './entities/reminder.entity';
import { NotFoundError } from 'rxjs';

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
  async findOne(@Param('id') id: string) {
    const article = await this.remindersService.findOne(+id);
    if (!article) {
      throw new NotFoundException(`Reminder with ${id} does not exist.`);
    }
    return article;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ReminderEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReminderDto: UpdateReminderDto,
  ) {
    return this.remindersService.update(+id, updateReminderDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ReminderEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.remindersService.remove(+id);
  }
}
