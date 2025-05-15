import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';

//import { Liquidacion } from '../../liquidaciones/entities/liquidacion.entity';

export enum UserRole {
  ADMIN = 'admin',
  OPERATOR = 'operator',
}

@Entity()
@Unique(['email']) // Asegura que el email sea único
@Unique(['identification']) // Identificación única por usuario
export class Empleado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  apellido: string;

  @Column()
  identification: string; // Ej: Cédula, DNI, Pasaporte

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.OPERATOR,
  })
  role: UserRole;

  //   @OneToMany(() => Liquidacion, (liquidacion) => liquidacion.empleado)
  //   liquidaciones: Liquidacion[];
}
