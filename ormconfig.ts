import { DataSource } from 'typeorm'

export const connectionSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'rocket-launch',
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/entities/*.ts']
})