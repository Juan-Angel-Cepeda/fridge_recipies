import { Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { YoloService } from './yolo.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { OllamaController } from 'src/ollama/ollama.controller';

@Controller('yolo')
export class YoloController {
  
  constructor(
    private readonly yoloService: YoloService,
    private readonly ollamaControler: OllamaController
  ){}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file:Express.Multer.File
  ){

    const imageBuffer = file.buffer;
    const ingredients = await this.yoloService.askYoloIngredients(imageBuffer);
    const ollamaResponse = await this.ollamaControler.askRecipie(ingredients);
    return ollamaResponse;
  }
}
