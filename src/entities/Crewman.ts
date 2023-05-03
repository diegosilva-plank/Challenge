import { v4 as uuid } from "uuid"
import { Crew } from "./Crew";

export class Crewman {

    id: string

    name: string

    patent: string

    crews: Crew[]

    constructor(props: Omit<Crewman, 'id' | 'crews'>, id?: string) {
        Object.assign(this, props)

        if(!this.id) {
            this.id = uuid()
        }
    }
}