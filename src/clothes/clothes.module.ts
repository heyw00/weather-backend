import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from './clothes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherEntity } from 'src/entities/weather.entity';
import { ClothSetEntity } from 'src/entities/clothesSet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WeatherEntity, ClothSetEntity])],
  controllers: [ClothesController],
  providers: [ClothesService],
})
export class ClothesModule {}
