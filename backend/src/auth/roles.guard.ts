import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ROLES_KEY } from './roles.decorator';
import { Role } from 'prisma/prisma-client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!roles) {
      return true; // Allow access if no roles are specified
    }

    if (!user) {
      throw new ForbiddenException('Access denied: No user found');
    }

    if (!user.role) {
      throw new ForbiddenException('Access denied: No role assigned');
    }

    // Directly compare the role from the user with the roles array
    const hasRole = roles.some((role) => role === user.role);

    if (!hasRole) {
      throw new ForbiddenException(
        `You do not have permission to access this resource (User role: ${user.role})`,
      );
    }

    return true;
  }
}
