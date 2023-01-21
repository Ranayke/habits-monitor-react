import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'


const app = Fastify()
const port = 3333
const host = '0.0.0.0'

app.register(cors)
app.register(appRoutes)


app.listen({
    port,
    host
}).then(() => {
    console.log(`HTTP Server running at localhost:${port}`)
})
