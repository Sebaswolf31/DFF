import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiquidacionService } from './liquidacion.service';
import { CreateLiquidacionDto } from './dto/create-liquidacion.dto';
import { UpdateLiquidacionDto } from './dto/update-liquidacion.dto';

@Controller('liquidacion')
export class LiquidacionController {
  constructor(private readonly liquidacionService: LiquidacionService) {}

  @Post()
  create(@Body() createLiquidacionDto: CreateLiquidacionDto) {
    return this.liquidacionService.create(createLiquidacionDto);
  }

  @Get()
  findAll() {
    return this.liquidacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liquidacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLiquidacionDto: UpdateLiquidacionDto) {
    return this.liquidacionService.update(+id, updateLiquidacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liquidacionService.remove(+id);
  }
}
