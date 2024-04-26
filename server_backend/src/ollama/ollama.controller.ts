import { Controller, Post, Body} from '@nestjs/common';
import { OllamaService } from './ollama.service';

@Controller('ollama')
export class OllamaController {

  constructor(
    private readonly ollamaService: OllamaService
  ){}

  @Post()
  create(@Body() ingredients : any) {
    return this.ollamaService.ollamaAnswer(ingredients);
  }
}
