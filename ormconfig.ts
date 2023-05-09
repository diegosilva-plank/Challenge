import { DataSource } from 'typeorm'
import { RocketDB } from './src/database/models/RocketDB'
import { LaunchDB } from './src/database/models/LaunchDB'
import { CrewDB } from './src/database/models/CrewDB'
import { CrewmanDB } from './src/database/models/CrewmanDB'


export const connectionSource = new DataSource({
    type: 'postgres',
    host: 'babar.db.elephantsql.com',
    port: 5432,
    username: 'tunawoyu',
    password: 'FXfnf6jSDVHvlAKkbN6k-TehusBzjniY',
    database: 'tunawoyu',
    migrations: ['src/database/migrations/*.ts'],
    entities: [RocketDB, LaunchDB, CrewDB, CrewmanDB]
})