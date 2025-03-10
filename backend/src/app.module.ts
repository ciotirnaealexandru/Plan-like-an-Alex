import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RemindersModule } from './reminders/reminders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, RemindersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
