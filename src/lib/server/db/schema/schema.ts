import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { sql, type InferModel } from "drizzle-orm"

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .default(sql`hex(randomblob(6))`),
  firstName: text("firstName").notNull(),
  lastName: text("name").notNull(),
  nick: text("nick").notNull(),
})

export type User = InferModel<typeof users>
export type CreateUser = InferModel<typeof users, "insert">

/*export const speakersList = sqliteTable("speakersList", {
  user: text("user")
    .notNull()
    .references(() => users.id),
  entryTime: text("entryTime")
    .notNull()
    .default(sql`datetime('now')`),
})

export const returningSpeakers = sqliteTable("returningSpeakers", {
  user: text("user")
    .notNull()
    .references(() => users.id),
  entryTime: text("entryTime")
    .notNull()
    .default(sql`datetime('now')`),
})*/
