import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity('rockets')
export class Rocket {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}