import { Module } from '@nestjs/common';
import { YoloService } from './yolo.service';
import { YoloController } from './yolo.controller';
import { ConfigModule } from '@nestjs/config';
import { OllamaModule } from 'src/ollama/ollama.module';

@Module({
  controllers: [YoloController],
  providers: [YoloService],
  imports:[ConfigModule, OllamaModule],
})
export class YoloModule {}
