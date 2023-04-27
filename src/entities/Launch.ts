import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Rocket } from "./Rocket";
import { Crew } from "./Crew";

@Entity('launches')
export class Launch {

    @PrimaryColumn()
    id: string

    @Column()
    launch_code: string

    @Column()
    date: string

    @Column()
    success: boolean

    @ManyToOne(() => Rocket, { nullable: false })
    @JoinColumn({ name: 'rocket_id' })
    rocket: Rocket

    @ManyToOne(() => Crew)
    @JoinColumn({ name: 'crew_id' })
    crew: Crew

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}