import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Crewman } from "./Crewman";

@Entity('crews')
export class Crew {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @ManyToMany(() => Crewman, (crewman) => crewman.crews)
    @JoinTable()
    crewmen: Crewman[]

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}