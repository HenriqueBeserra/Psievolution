# dbOnline — online/test database

This folder holds the **second database connection** for tests or an online DB (e.g. Supabase).

- **Local DB:** `infra/db` → uses `DATABASE_URL` (Docker Postgres).
- **Online DB:** `infra/dbOnline` → uses `DATABASE_URL_ONLINE`.

## Setup

1. In `.env`, add (Supabase example):

   ```env
   DATABASE_URL_ONLINE='postgresql://postgres.[project-ref]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true'
   ```

2. Get the URL from Supabase: Project Settings → Database → Connection string (URI, Session mode).

## Usage

Import when you need to run against the online DB:

```ts
import { dbOnline, clientOnline } from '../../infra/dbOnline/db-online-index'
// Use dbOnline like db (same schema: pacientes, evolucao, etc.)
```

Do **not** commit real passwords. Keep `DATABASE_URL_ONLINE` only in `.env` (gitignored).
