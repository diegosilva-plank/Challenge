import { ICrew } from './ICrew'
import { IRocket } from './IRocket'

export interface ILaunch {
  id: string

  launch_code: string

  date: string

  success: boolean

  rocket: IRocket

  crew: ICrew
}
