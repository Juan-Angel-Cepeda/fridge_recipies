export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    ollama_url: process.env.OLLAMA_URL,
    port: process.env.PORT || 3002,
})