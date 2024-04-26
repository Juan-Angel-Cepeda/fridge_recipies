import { Injectable } from '@nestjs/common';
import axios , { AxiosInstance } from 'axios';

@Injectable()
export class YoloService {
 
  private readonly axios:AxiosInstance = axios;
  async askYoloIngredients(imageBuffer: Buffer) {
  
    const response = await this.axios.post<any>(process.env.YOLO_URL,
    imageBuffer, {
      headers:{
        'Content-Type': 'application/octet-stream',
      }
    });
    
    const ingredientsDetected =   response.data['ingredients-detected']
    const ingredientString = ingredientsDetected.join(', ');
    return ingredientString;
  }
}
