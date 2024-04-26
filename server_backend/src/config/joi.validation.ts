import * as Joi from 'joi';

export const JoiValitadionSchema = Joi.object({
    OLLAMA_URL: Joi.required().default('http://localhost:11434/api/generate'),
    PORT:Joi.number().default(3005)
})