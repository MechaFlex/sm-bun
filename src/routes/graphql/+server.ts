import { createYoga } from "graphql-yoga"
import type { RequestEvent } from "@sveltejs/kit"
import { schema } from "$lib/server/graphql/builder"

const yoga = createYoga<RequestEvent>({
  schema: schema,
  fetchAPI: globalThis,
})

export { yoga as GET, yoga as POST }
