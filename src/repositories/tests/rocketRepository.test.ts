import { Rocket } from '../../entities/Rocket'
import { repositoryDestroy, repositoryInitialize, rocketRepository } from '..'

describe('Testing rocketRepository', () => {
  test('Creating rocket', async () => {
    await repositoryInitialize()
    const rocket = new Rocket({ name: 'Foguete' })
    const created_rocket = await rocketRepository.create(rocket)
    expect(created_rocket.id).toBe(rocket.id)
    expect(created_rocket.name).toBe('Foguete')
    await rocketRepository.delete(created_rocket.id)
  })

  test('Get rocket', async () => {
    const rocket = new Rocket({ name: 'Foguete' })
    const created_rocket = await rocketRepository.create(rocket)
    const id = created_rocket.id
    const got = await rocketRepository.get({ id })
    expect(got.length).toBe(1)
    expect(got[0].id).toBe(id)
    await rocketRepository.delete(id)
  })

  test('Update rocket', async () => {
    const rocket = new Rocket({ name: 'Foguete' })
    const created_rocket = await rocketRepository.create(rocket)
    const id = created_rocket.id
    const updated_rocket = await rocketRepository.update(id, {
      name: 'Novo Foguete',
    })
    expect(updated_rocket.name).toBe('Novo Foguete')
    expect(updated_rocket.id).toBe(id)
    const got = await rocketRepository.get({ id })
    expect(got.length).toBe(1)
    expect(got[0].name).toBe('Novo Foguete')
    await rocketRepository.delete(id)
  })

  test('Delete rocket', async () => {
    const rocket = new Rocket({ name: 'Foguete' })
    const created_rocket = await rocketRepository.create(rocket)
    const id = created_rocket.id
    await rocketRepository.delete(id)
    const got = await rocketRepository.get({ id })
    expect(got.length).toBe(0)
    await repositoryDestroy()
  })
})
