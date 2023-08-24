import type { Config } from "drizzle-kit"
//import * as dotenv from "dotenv"
//dotenv.config()

export default {
  schema: "./src/lib/server/db/schema/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./database/sqlite.db",
  },
} satisfies Config
