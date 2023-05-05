import { crewmanRepository, repositoryDestroy, repositoryInitialize } from ".."
import { Crewman } from "../../entities/Crewman"

describe('Testing crewmanRepository', () => {
    test('Creating crewman', async () => {
        await repositoryInitialize()
        const crewman = new Crewman({ name: 'Crewman', patent: 'rookie' })
        const created_crewman = await crewmanRepository.create(crewman)
        expect(created_crewman.id).toBe(crewman.id)
        expect(created_crewman.name).toBe('Crewman')
        await crewmanRepository.delete(created_crewman.id)
    })

    test('Get crewman', async () => {
        const crewman = new Crewman({ name: 'Crewman', patent: 'rookie' })
        const created_crewman = await crewmanRepository.create(crewman)
        const id = created_crewman.id
        const got = await crewmanRepository.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].id).toBe(id)
        await crewmanRepository.delete(id)
    })

    test('Update crewman', async () => {
        const crewman = new Crewman({ name: 'Crewman', patent: 'rookie' })
        const created_crewman = await crewmanRepository.create(crewman)
        const id = created_crewman.id
        const updated_crewman = await crewmanRepository.update(id, { name: 'Novo Crewman' })
        expect(updated_crewman.name).toBe('Novo Crewman')
        expect(updated_crewman.id).toBe(id)
        const got = await crewmanRepository.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].name).toBe('Novo Crewman')
        await crewmanRepository.delete(id)
    })

    test('Delete crewman', async () => {
        const crewman = new Crewman({ name: 'Crewman', patent: 'rookie' })
        const created_crewman = await crewmanRepository.create(crewman)
        const id = created_crewman.id
        await crewmanRepository.delete(id)
        const got = await crewmanRepository.get({ id })
        expect(got.length).toBe(0)
        await repositoryDestroy()
    })
})