import { Hono } from 'hono'
import { v4 as uuidv4 } from 'uuid'

const app = new Hono()

app.get('/', (c) => {
  return c.render(
    <>
      <script src="https://unpkg.com/htmx.org@1.9.10"></script>
      <h1>Hello world</h1>
      <p>
        The response is: <span id="message" hx-get="/api/message" hx-trigger="load" hx-swap="innerText"></span>.
      </p>
    </>
  )
})

app.get('/api/message', (c) => {
  return c.json({
    message: 'Hello, World!',
    id: uuidv4(),
    date: new Date().toUTCString(),
  })
})

export default app
