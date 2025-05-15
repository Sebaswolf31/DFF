import { PartialType } from '@nestjs/mapped-types';
import { CreateLiquidacionDto } from './create-liquidacion.dto';

export class UpdateLiquidacionDto extends PartialType(CreateLiquidacionDto) {}
