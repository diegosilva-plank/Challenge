import { DataSource } from 'typeorm'

export const connectionSource = new DataSource({
    type: 'postgres',
    host: 'babar.db.elephantsql.com',
    port: 5432,
    username: 'tunawoyu',
    password: 'FXfnf6jSDVHvlAKkbN6k-TehusBzjniY',
    database: 'tunawoyu',
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/entities/*{.ts,.js}']
})//