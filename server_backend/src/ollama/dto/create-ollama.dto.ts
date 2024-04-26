import { IsJSON, IsString, MinLength } from "class-validator";

export class PromptOllamaDto {
    @IsString()
    @MinLength(1)
    ingredients: string;
}
