import z from "zod"

const schema = z.object({
  foo: z.string(),
})

type Schema = z.infer<typeof schema>
