import { Test, TestingModule } from '@nestjs/testing';
import { LiquidacionService } from './liquidacion.service';

describe('LiquidacionService', () => {
  let service: LiquidacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiquidacionService],
    }).compile();

    service = module.get<LiquidacionService>(LiquidacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
