import { crewRepository, repositoryDestroy, repositoryInitialize } from ".."
import { Crew } from "../../entities/Crew"

describe('Testing crewRepository', () => {
    test('Creating crew', async () => {
        await repositoryInitialize()
        const crew = new Crew({ name: 'Crew' })
        const created_crew = await crewRepository.create(crew)
        expect(created_crew.id).toBe(crew.id)
        expect(created_crew.name).toBe('Crew')
        await crewRepository.delete(created_crew.id)
    })

    test('Get crew', async () => {
        const crew = new Crew({ name: 'Crew' })
        const created_crew = await crewRepository.create(crew)
        const id = created_crew.id
        const got = await crewRepository.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].id).toBe(id)
        await crewRepository.delete(id)
    })

    test('Update crew', async () => {
        const crew = new Crew({ name: 'Crew' })
        const created_crew = await crewRepository.create(crew)
        const id = created_crew.id
        const updated_crew = await crewRepository.update(id, { name: 'Novo Crew' })
        expect(updated_crew.name).toBe('Novo Crew')
        expect(updated_crew.id).toBe(id)
        const got = await crewRepository.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].name).toBe('Novo Crew')
        await crewRepository.delete(id)
    })

    test('Delete crew', async () => {
        const crew = new Crew({ name: 'Crew' })
        const created_crew = await crewRepository.create(crew)
        const id = created_crew.id
        await crewRepository.delete(id)
        const got = await crewRepository.get({ id })
        expect(got.length).toBe(0)
        await repositoryDestroy()
    })
})