import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { Role } from 'prisma/prisma-client';
import { RemindersService } from 'src/reminders/reminders.service';

@Injectable()
export class OwnershipGuard implements CanActivate {
  constructor(private remindersService: RemindersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const { id } = request.params;

    // If user is an admin, grant access
    if (user.role === Role.ADMIN) {
      return true;
    }

    // If no ID is provided (like in findAll()), allow access
    if (!id) {
      return true;
    }

    return true;
  }
}
