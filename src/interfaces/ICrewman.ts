import { ICrew } from './ICrew'

export interface ICrewman {
  id: string

  name: string

  patent: string

  crews: ICrew[]
}
