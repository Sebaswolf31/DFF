import { Module } from '@nestjs/common';
import { LiquidacionService } from './liquidacion.service';
import { LiquidacionController } from './liquidacion.controller';

@Module({
  controllers: [LiquidacionController],
  providers: [LiquidacionService],
})
export class LiquidacionModule {}
