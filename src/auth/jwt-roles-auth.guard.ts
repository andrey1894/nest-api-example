import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { User } from 'src/users/users.model';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class JwtRolesAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
      const authHeader = req.headers.authorization;
      const [bearer, token] = authHeader.split(' ');
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User is not autosize' });
      }

      const user = this.jwtService.verify(token) as User;
      req.user = user;
      return user.roles.some((role) => requiredRoles.includes(role.value));
    } catch (e) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
