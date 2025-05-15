import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateEmpleadoDto,
  LoginUserDto,
} from '../empleados/dto/create-empleado.dto';
import { Empleado } from '../empleados/entities/empleado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
    private jwtService: JwtService,
  ) {}
  getAuth() {
    return 'Get all Auth';
  }

  async addUserService(
    user: CreateEmpleadoDto,
  ): Promise<Omit<Empleado, 'password'>> {
    const { password, confirmPassword, email, ...userData } = user;
    const existingUser = await this.empleadoRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException(`El email ${email} ya está en uso`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await this.empleadoRepository.save({
      ...userData,
      email,
      password: hashPassword,
    });

    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  async singin(credentials: LoginUserDto) {
    const { email, password } = credentials;
    const existingUser = await this.empleadoRepository.findOne({
      where: { email },
    });
    if (!existingUser) {
      throw new BadRequestException('Error en las credenciales');
    }

    const passwordEqual = await bcrypt.compare(password, existingUser.password);
    if (!passwordEqual) {
      throw new BadRequestException('Error en las credenciales');
    }

    const userPayload = {
      id: existingUser.id,
      email: existingUser.email,
      roles: existingUser.role,
    };

    const token = this.jwtService.sign(userPayload);

    return {
      token,
      message: 'Ingreso exitoso',
    };
  }
}
