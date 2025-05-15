import {
  Controller,
  Get,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
  Put,
  Body,
} from '@nestjs/common';
import { EmpleadoService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorators';
import { UserRole } from '../empleados/entities/empleado.entity';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadoService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  getUsers(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.empleadosService.getUsersService(
      Number(page) || 1,
      Number(limit) || 5,
    );
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.empleadosService.getUserByIdService(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @Roles(UserRole.ADMIN)
  async updateUser(
    @Param('id', ParseUUIDPipe) userId: string,
    @Body() updateUserDto: UpdateEmpleadoDto,
  ) {
    return this.empleadosService.updateUserService(userId, updateUserDto);
  }
}
