import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { CrewmanDB } from "./CrewmanDB";

@Entity('crews')
export class CrewDB {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @ManyToMany(() => CrewmanDB, (crewman) => crewman.crews)
    @JoinTable()
    crewmen: CrewmanDB[]

    constructor(props: Omit<CrewDB, 'id' | 'crewmen'>, id?: string) {
        Object.assign(this, props)
        
        if(!this.id) {
            this.id = uuid()
        }
    }
}