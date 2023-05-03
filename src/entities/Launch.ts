import { v4 as uuid } from "uuid"
import { Rocket } from "./Rocket";
import { Crew } from "./Crew";

export class Launch {

    id: string

    launch_code: string

    date: string

    success: boolean

    rocket: Rocket

    crew: Crew

    constructor(props: Omit<Launch, 'id' | 'rocket' | 'crew'>, id?: string) {
        Object.assign(this, props)

        if(!this.id) {
            this.id = uuid()
        }
    }
}