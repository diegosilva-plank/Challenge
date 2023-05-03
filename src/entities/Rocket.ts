import { v4 as uuid } from "uuid";

export class Rocket {

    id: string

    name: string

    constructor(props: Omit<Rocket, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!this.id) {
            this.id = uuid()
        }
    }
}