import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly userRepository: Repository<Empleado>,
  ) {}
  async getUsersService(page: number, limit: number) {
    let users = await this.userRepository.find();
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    users = users.slice(startIndex, endIndex);
    return users.map(({ password, ...user }) => user);
  }

  async getUserByIdService(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async updateUserService(
    userId: string,
    updateUserDto: UpdateEmpleadoDto,
  ): Promise<{ message: string; user: Empleado }> {
    const existingUser = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new NotFoundException(`El usuario con ID "${userId}" no existe.`);
    }

    if (updateUserDto.email) {
      const existingUser = await this.userRepository.findOne({
        where: { email: updateUserDto.email },
      });
      if (existingUser && existingUser.id !== userId) {
        throw new BadRequestException(
          'El email ya está en uso por otro usuario',
        );
      }
    }
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto.password = hashedPassword;
    }

    Object.assign(existingUser, updateUserDto);

    const savedUser = await this.userRepository.save(existingUser);

    return {
      message: `El usuario "${savedUser.name}" ha sido actualizado correctamente.`,
      user: savedUser,
    };
  }
}
