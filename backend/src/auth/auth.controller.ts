import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CreateEmpleadoDto,
  LoginUserDto,
} from '../empleados/dto/create-empleado.dto';
import { Roles } from './decorators/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/singup')
  singup(@Body() user: CreateEmpleadoDto) {
    return this.authService.addUserService(user);
  }

  @Post('/signin')
  signin(@Body() credentials: LoginUserDto) {
    return this.authService.singin(credentials);
  }
}
