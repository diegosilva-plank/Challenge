import express from 'express'
import { router } from './src/routes'
import { errors } from 'celebrate'
import { connectionSource } from './ormconfig'

const app = express()
const PORT = 3333

app.use(express.json())
app.use(router)
app.use(errors());

app.get('/', (req, res) => res.send('Hello rockets!'))

connectionSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized')
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err)
    })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))