import { z } from 'zod'

const envSchema = z.object({
  API_BASE_URL: z.string(),
  AUTH_REDIRECT_URL: z.string(),
  DB_URL: z.string(),
  JWT_SECRET_KEY: z.string(),
  RESEND_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
