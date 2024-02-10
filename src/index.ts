import { Hono } from 'hono'
import { v4 as uuidv4 } from 'uuid'

const app = new Hono()

app.get('/', (c) => {
  return c.text(`Hello, World!: ${uuidv4()}`)
})

export default app
