import { connectionSource } from "../database/ormconfig";
import { CrewRepository } from "./crewRepository";
import { CrewmanRepository } from "./crewmanRepository";
import { LaunchRepository } from "./launchRepository";
import { RocketRepository } from "./rocketRepository";

export const rocketRepository = new RocketRepository();
export const launchRepository = new LaunchRepository();
export const crewRepository = new CrewRepository();
export const crewmanRepository = new CrewmanRepository();

export const repositoryInitialize = () => {
    connectionSource.initialize()
        .then(() => {
            console.log('Data Source has been initialized')
        })
        .catch((err) => {
            console.error('Error during Data Source initialization', err)
        })
}