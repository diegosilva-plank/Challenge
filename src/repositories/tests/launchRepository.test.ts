import { launchRepository, repositoryDestroy, repositoryInitialize, rocketRepository } from ".."
import { Launch } from "../../entities/Launch"
import { Rocket } from "../../entities/Rocket"

describe('Testing launchRepository', () => {
    test('Creating launch', async () => {
        await repositoryInitialize()
        const launch_wrong_rocket = new Launch({ launch_code: '#1', date: '20/04/2023', success: false, rocket: 'id', crew: null })
        await expect(launchRepository.create(launch_wrong_rocket)).rejects.toThrow()
        const rocket = new Rocket({ name: 'Rocket' })
        const created_rocket = await rocketRepository.create(rocket)
        const rocket_id = created_rocket.id
        const launch_wrong_crew = new Launch({ launch_code: '#1', date: '20/04/2023', success: false, rocket: rocket_id, crew: 'id' })
        await expect(launchRepository.create(launch_wrong_crew)).rejects.toThrow()
        const launch = new Launch({ launch_code: '#1', date: '20/04/2023', success: false, rocket: rocket_id, crew: null })
        const creted_launch = await launchRepository.create(launch)
        const id = creted_launch.id
        const got = await launchRepository.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].launch_code).toBe('#1')
        await launchRepository.delete(id)
        await rocketRepository.delete(rocket_id)
    })

    test('Get launch', async () => {
        const rocket = new Rocket({ name: 'Rocket' })
        const created_rocket = await rocketRepository.create(rocket)
        const rocket_id = created_rocket.id
        const launch = new Launch({ launch_code: '#1', date: '20/04/2023', success: false, rocket: rocket_id, crew: null })
        const creted_launch = await launchRepository.create(launch)
        const id = creted_launch.id
        const got = await launchRepository.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].id).toBe(id)
        await launchRepository.delete(id)
        await rocketRepository.delete(rocket_id)
    })

    test('Update launch', async () => {
        const rocket = new Rocket({ name: 'Rocket' })
        const created_rocket = await rocketRepository.create(rocket)
        const rocket_id = created_rocket.id
        const launch = new Launch({ launch_code: '#1', date: '20/04/2023', success: false, rocket: rocket_id, crew: null })
        const creted_launch = await launchRepository.create(launch)
        const id = creted_launch.id
        const updated_launch = await launchRepository.update(id, { launch_code: '#new' })
        expect(updated_launch.launch_code).toBe('#new')
        expect(updated_launch.id).toBe(id)
        const got = await launchRepository.get({ id })
        expect(got.length).toBe(1)
        expect(got[0].launch_code).toBe('#new')
        await launchRepository.delete(id)
        await rocketRepository.delete(rocket_id)
    })

    test('Delete launch', async () => {
        const rocket = new Rocket({ name: 'Rocket' })
        const created_rocket = await rocketRepository.create(rocket)
        const rocket_id = created_rocket.id
        const launch = new Launch({ launch_code: '#1', date: '20/04/2023', success: false, rocket: rocket_id, crew: null })
        const creted_launch = await launchRepository.create(launch)
        const id = creted_launch.id
        await launchRepository.delete(id)
        const got = await launchRepository.get({ id })
        expect(got.length).toBe(0)
        await rocketRepository.delete(rocket_id)
        await repositoryDestroy()
    })
})