import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { RocketDB } from "./RocketDB";
import { CrewDB } from "./CrewDB";

@Entity('launches')
export class LaunchDB {

    @PrimaryColumn()
    id: string

    @Column()
    launch_code: string

    @Column()
    date: string

    @Column()
    success: boolean

    @ManyToOne(() => RocketDB, { nullable: false })
    @JoinColumn({ name: 'rocket_id' })
    rocket: RocketDB

    @ManyToOne(() => CrewDB)
    @JoinColumn({ name: 'crew_id' })
    crew: CrewDB

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}