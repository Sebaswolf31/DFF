import { Test, TestingModule } from '@nestjs/testing';
import { LiquidacionController } from './liquidacion.controller';
import { LiquidacionService } from './liquidacion.service';

describe('LiquidacionController', () => {
  let controller: LiquidacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiquidacionController],
      providers: [LiquidacionService],
    }).compile();

    controller = module.get<LiquidacionController>(LiquidacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
