import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '../../empleados/entities/empleado.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const requestHeader: string | undefined = request.headers['authorization'];

    if (!requestHeader) {
      throw new UnauthorizedException('Token No Encontrado');
    }

    const tokenParts = requestHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      throw new UnauthorizedException('Formato de Token Incorrecto');
    }

    const token = tokenParts[1];

    try {
      const secret = process.env.JWT_SECRET;
      const user = this.jwtService.verify(token, { secret });
      request.user = user;

      if (!user.roles.includes(UserRole.ADMIN)) {
        throw new UnauthorizedException('No tienes permisos para acceder');
      }

      console.log(user);
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token No Valido');
    }
  }
}
