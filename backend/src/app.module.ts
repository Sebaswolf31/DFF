import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import typeormConfig from './config/typeorm';
import { AppService } from './app.service';
import { OrdenesModule } from './ordenes/ordenes.module';
import { AuthModule } from './auth/auth.module';
import { LiquidacionModule } from './liquidacion/liquidacion.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { OperacionesModule } from './operaciones/operaciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';

@Module({
  imports: [
    OrdenesModule,
    AuthModule,
    LiquidacionModule,
    EmpleadosModule,
    OperacionesModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES },
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbConfig = config.get('typeorm') || {};
        console.log('📡 Intentando conectar a la base de datos...');
        return dbConfig;
      },
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    console.log('✅ Módulo iniciado correctamente.');
    console.log(
      '🔗 Configuración actual de la BD:',
      this.configService.get('typeorm'),
    );
  }
}
