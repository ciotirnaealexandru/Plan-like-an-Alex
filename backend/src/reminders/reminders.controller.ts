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
  UseGuards,
  Req,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReminderEntity } from './entities/reminder.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OwnershipGuard } from 'src/auth/ownership.guard';

@Controller('reminders')
@ApiTags('Reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReminderEntity })
  async create(@Body() createReminderDto: CreateReminderDto, @Req() req) {
    return new ReminderEntity(
      await this.remindersService.create(createReminderDto, req.user.userId),
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReminderEntity, isArray: true })
  async findAll(@Req() req) {
    const reminders = await this.remindersService.findAll(req.user);
    return reminders.map((reminder) => new ReminderEntity(reminder));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReminderEntity })
  async findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const reminder = await this.remindersService.findOne(id, req.user);
    if (!reminder) {
      throw new NotFoundException(`Reminder with id ${id} does not exist.`);
    }
    return new ReminderEntity(reminder);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReminderEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReminderDto: UpdateReminderDto,
    @Req() req,
  ) {
    return new ReminderEntity(
      await this.remindersService.update(id, updateReminderDto, req.user),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReminderEntity })
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return new ReminderEntity(await this.remindersService.remove(id, req.user));
  }
}
