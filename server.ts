import express from 'express'
import { router } from './src/routes'
import { errors } from 'celebrate'
import { repositoryInitialize } from './src/repositories'
import { Request, Response } from 'express'
import { CorsConfig } from './CorsConfig'

const app = express()
const PORT = 3333

app.use(CorsConfig)
app.use(express.json())
app.use(router)
app.use(errors())
app.get('/', (req: Request, res: Response) => {
  return res.json({ msg: 'Welcome to my Rocket application' })
})

repositoryInitialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
  })
})
