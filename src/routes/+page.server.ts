import { db } from "$lib/server/db/drizzle"
import { users, type User } from "$lib/server/db/schema/schema"
import type { Actions } from "./$types"

export const actions = {
  default: async (event) => {
    console.log("hej1")

    // const data = await event.request.formData()
    // const nick = data.get("nick") as string

    // console.log("nick", nick)

    db.insert(users).values({ firstName: "hje", lastName: "Doe", nick: "MY NICK" })

    console.log("hej2")

    try {
      const selectResult = db.select().from(users).get()
    } catch (e) {
      console.log(e)
    }

    console.log("hej3")
    //console.log(selectResult[0], "selectResult")
  },
} satisfies Actions
