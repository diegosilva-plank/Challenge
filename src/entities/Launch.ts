import { v4 as uuid } from 'uuid'
import { Rocket } from './Rocket'
import { Crew } from './Crew'

export class Launch {
  id: string

  launch_code: string

  date: string

  success: boolean

  rocket: any

  crew: any

  constructor(props: Omit<Launch, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = uuid()
    }
  }
}
