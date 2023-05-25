import { Launch } from '../entities/Launch'
import { launchRepository, rocketRepository } from '../repositories'
import { CrudService } from './genericService'

export class LaunchService extends CrudService<Launch> {
  async create(payload: Omit<Launch, 'id'>): Promise<Launch> {
    const rocketId = payload.rocket
    const foundRocket = await rocketRepository.get({ id: rocketId })

    if (!foundRocket.length) throw new Error('Rocket not found')

    const launch = await launchRepository.create(payload)
    return launch
  }

  async update(
    id: string,
    payload: Partial<Omit<Launch, 'id'>>
  ): Promise<Launch> {
    const rocketId = payload.rocket
    const foundRocket = await rocketRepository.get({ id: rocketId })

    if (!foundRocket.length) throw new Error('Rocket not found')

    const launch = await launchRepository.update(id, payload)
    return launch
  }

  async get(filter?: Partial<Launch>): Promise<Launch[]> {
    const entities = await launchRepository.get(filter, ['rocket', 'crew'])
    return entities
  }
}
