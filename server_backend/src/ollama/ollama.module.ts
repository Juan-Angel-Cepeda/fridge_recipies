import { Module } from '@nestjs/common';
import { OllamaService } from './ollama.service';
import { OllamaController } from './ollama.controller';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [OllamaController],
  providers: [OllamaService, OllamaController],
  imports:[ConfigModule],
  exports:[OllamaController]
})
export class OllamaModule {}
