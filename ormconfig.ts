import { DataSource } from 'typeorm'
import { Rocket } from './src/entities/Rocket'
import { Launch } from './src/entities/Launch'
import { Crew } from './src/entities/Crew'
import { Crewman } from './src/entities/Crewman'

export const connectionSource = new DataSource({
    type: 'postgres',
    host: 'babar.db.elephantsql.com',
    port: 5432,
    username: 'tunawoyu',
    password: 'FXfnf6jSDVHvlAKkbN6k-TehusBzjniY',
    database: 'tunawoyu',
    migrations: ['src/database/migrations/*.ts'],
    entities: [Rocket, Launch, Crew, Crewman]
})