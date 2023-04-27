import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Crew } from "./Crew";

@Entity('crewmen')
export class Crewman {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    patent: string
    
    @ManyToMany(() => Crew, (crew) => crew.crewmen)
    crews: Crew[]

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}