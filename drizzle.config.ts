import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

// When DATABASE_URL_ONLINE is set, migrations/studio target Supabase (online).
// Otherwise uses DATABASE_URL (local Docker).
const dbUrl =
	process.env.DATABASE_URL_ONLINE ?? process.env.DATABASE_URL
if (!dbUrl) {
	throw new Error('Set DATABASE_URL (local) or DATABASE_URL_ONLINE (Supabase) in .env')
}

export default defineConfig({
	out: './drizzle',
	schema: './src/infra/dbOnline/online-schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: dbUrl,
	},
})
