import { Module } from '@nestjs/common';
import { OllamaModule } from './ollama/ollama.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValitadionSchema } from './config/joi.validation';
import { YoloModule } from './yolo/yolo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[EnvConfiguration],
      validationSchema:JoiValitadionSchema
    }),
    OllamaModule,
    YoloModule,
  ],
})
export class AppModule {}
