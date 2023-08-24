import SchemaBuilder from "@pothos/core"
import { users as usersTable, type User } from "../db/schema/schema"
import { db } from "../db/drizzle"

export const builder = new SchemaBuilder({})

const UserType = builder.objectRef<User>("User").implement({
  fields: (t) => ({
    id: t.exposeID("id"),
    firstName: t.exposeString("firstName"),
    lastName: t.exposeString("lastName"),
    nick: t.exposeString("nick"),
    name: t.string({
      resolve: (user) => `${user.firstName} ${user.lastName}`,
    }),
    fullName: t.string({
      resolve: (user) => `${user.firstName} "${user.nick}" ${user.lastName}`,
    }),
  }),
})

builder.queryType({
  fields: (t) => ({
    users: t.field({
      type: [UserType],
      resolve: () => {
        const selectedUsers = db.select().from(usersTable).all()
        return selectedUsers
      },
    }),
  }),
})

export const schema = builder.toSchema()
