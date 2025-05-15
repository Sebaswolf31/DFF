import { Injectable } from '@nestjs/common';
import { CreateLiquidacionDto } from './dto/create-liquidacion.dto';
import { UpdateLiquidacionDto } from './dto/update-liquidacion.dto';

@Injectable()
export class LiquidacionService {
  create(createLiquidacionDto: CreateLiquidacionDto) {
    return 'This action adds a new liquidacion';
  }

  findAll() {
    return `This action returns all liquidacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liquidacion`;
  }

  update(id: number, updateLiquidacionDto: UpdateLiquidacionDto) {
    return `This action updates a #${id} liquidacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} liquidacion`;
  }
}
