import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [PrismaModule, RemindersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
