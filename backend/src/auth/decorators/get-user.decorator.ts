import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Empleado } from '../../empleados/entities/empleado.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Empleado => {
    const req = ctx.switchToHttp().getRequest();
    return req.user; // aquí debe estar el usuario que puso el AuthGuard
  },
);
