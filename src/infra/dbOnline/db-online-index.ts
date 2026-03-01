import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import dotenv from 'dotenv'
import * as schema from '../db/schema'

dotenv.config()

const connectionString = process.env.DATABASE_URL_ONLINE
if (!connectionString) {
	throw new Error(
		'DATABASE_URL_ONLINE not found in .env. Add it for online/test DB (e.g. Supabase).'
	)
}

export const clientOnline = postgres(connectionString)
export const dbOnlineForDevelopment = drizzle(clientOnline, { schema, logger: true })
