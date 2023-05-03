import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity('rockets')
export class RocketDB {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    constructor(props: Omit<RocketDB, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!this.id) {
            this.id = uuid()
        }
    }
}