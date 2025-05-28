import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
    const user = await this.empleadoRepository.findOne({
      where: { email: credentials.email },
      relations: ['company'], // Asegurar carga de relación cuando exista
    });

    if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Payload con datos esenciales para permisos
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    };
  }
}
