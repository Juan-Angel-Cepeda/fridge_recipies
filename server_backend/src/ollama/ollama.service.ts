import { Injectable } from '@nestjs/common';
import { PromptOllamaDto } from './dto/create-ollama.dto';
import  axios, { AxiosInstance} from 'axios';


@Injectable()
export class OllamaService {
 
  private readonly axios:AxiosInstance = axios;
  async ollamaAnswer(ingredients:any){
    
    console.log(ingredients)
    const data = { 
      model:"llama2",
      prompt:"Cuantas veces se repiten estas palabras:  "+ ingredients,
    }
    
    const response = await this.axios.post<any>(process.env.OLLAMA_URL,data,{
      headers:{
        'Content-Type':'aplication/json'
      },
    })
    
    const messages = response.data.split('\n')
    .filter(line => line.trim() !== '')
    .map(line => JSON.parse(line))
    
    const fullText = []

    messages.forEach(message => {
      if(message.done === false){
        fullText.push(message.response)
      }
    });
    return fullText.join('')
  }
}
