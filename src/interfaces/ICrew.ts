import { ICrewman } from './ICrewman'

export interface ICrew {
  id: string

  name: string

  crewmen: ICrewman[]
}
