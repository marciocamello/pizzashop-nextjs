import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '@/env'

import * as schema from './schema'

const client = postgres(env.DB_URL)

export const db = drizzle(client, { schema })
