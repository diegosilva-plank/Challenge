import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { CrewDB } from './CrewDB'

@Entity('crewmen')
export class CrewmanDB {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  patent: string

  @ManyToMany(() => CrewDB, crew => crew.crewmen)
  crews: CrewDB[]

  constructor(props: Omit<CrewmanDB, 'id' | 'crews'>, id?: string) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = uuid()
    }
  }
}
