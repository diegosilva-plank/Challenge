import { rocketService } from ".."
import { repositoryDestroy, repositoryInitialize } from "../../repositories"

describe('Testing rocketService', () => {
    test('Creating rocket', async () => {
        await repositoryInitialize()
        const created_rocket = await rocketService.create({ name: 'Foguete' })
        expect(created_rocket.name).toBe('Foguete')
        await rocketService.delete(created_rocket.id)
    })

    test('Get rocket', async () => {
        const created_rocket = await rocketService.create({ name: 'Foguete' })
        const id = created_rocket.id
        const got = await rocketService.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].id).toBe(id)
        await rocketService.delete(id)
    })

    test('Update rocket', async () => {
        const created_rocket = await rocketService.create({ name: 'Foguete' })
        const id = created_rocket.id
        const updated_rocket = await rocketService.update(id, { name: 'Novo Foguete' })
        expect(updated_rocket.name).toBe('Novo Foguete')
        expect(updated_rocket.id).toBe(id)
        const got = await rocketService.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].name).toBe('Novo Foguete')
        await rocketService.delete(id)
    })

    test('Delete rocket', async () => {
        const created_rocket = await rocketService.create({ name: 'Foguete' })
        const id = created_rocket.id
        await rocketService.delete(id)
        const got = await rocketService.get({ id })
        expect(got.length).toBe(0)
        await repositoryDestroy()
    })
})