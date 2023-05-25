import { v4 as uuid } from 'uuid'
import { Crewman } from './Crewman'

export class Crew {
  id: string

  name: string

  crewmen: any[]

  constructor(props: Omit<Crew, 'id' | 'crewmen'>, id?: string) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = uuid()
    }
  }
}
