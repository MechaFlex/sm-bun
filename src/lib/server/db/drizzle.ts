import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import Database from "better-sqlite3"

const bettersqlite = new Database("./database/sqlite.db")
bettersqlite.pragma("journal_mode = WAL")
export const db: BetterSQLite3Database = drizzle(bettersqlite)

// I dont know how to get the migrator to run
//migrate(db, { migrationsFolder: "./drizzle" })
