import { connectionSource } from '../database/ormconfig'
import { CrewRepository } from './crewRepository'
import { CrewmanRepository } from './crewmanRepository'
import { LaunchRepository } from './launchRepository'
import { RocketRepository } from './rocketRepository'

export const rocketRepository = new RocketRepository()
export const launchRepository = new LaunchRepository()
export const crewRepository = new CrewRepository()
export const crewmanRepository = new CrewmanRepository()

export const repositoryInitialize = async () => {
  await connectionSource.initialize()
}

export const repositoryDestroy = async () => {
  await connectionSource.destroy()
}
