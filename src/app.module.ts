import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configs from './config';
import { ProductsModule } from './products/products.module';
import { DatabaseConfig } from './config/type';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const db = config.get<DatabaseConfig>('database', {
          host: 'localhost',
          port: 5432,
          user: 'postgres',
          pass: '',
          name: 'inventory_db',
        });

        return {
          type: 'postgres',
          host: db.host,
          port: db.port,
          username: db.user,
          password: db.pass,
          database: db.name,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    ProductsModule,
  ],
})
export class AppModule {}
