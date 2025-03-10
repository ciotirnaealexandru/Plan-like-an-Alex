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

@Controller('reminders')
@ApiTags('Reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @ApiCreatedResponse({ type: ReminderEntity })
  async create(@Body() createReminderDto: CreateReminderDto) {
    return new ReminderEntity(
      await this.remindersService.create(createReminderDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: ReminderEntity, isArray: true })
  async findAll() {
    const reminders = await this.remindersService.findAll();
    return reminders.map((reminder) => new ReminderEntity(reminder));
  }

  @Get(':id')
  @ApiOkResponse({ type: ReminderEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const article = await this.remindersService.findOne(id);
    if (!article) {
      throw new NotFoundException(`Reminder with id ${id} does not exist.`);
    }
    return new ReminderEntity(await article);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ReminderEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReminderDto: UpdateReminderDto,
  ) {
    return new ReminderEntity(
      await this.remindersService.update(id, updateReminderDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: ReminderEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ReminderEntity(await this.remindersService.remove(id));
  }
}
