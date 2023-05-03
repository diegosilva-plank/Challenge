import { Rocket } from "../entities/Rocket";
import * as repositories from "../repositories";
import { CrewService } from "./crewService";
import { CrewmanService } from "./crewmanService";
import { CrudService } from "./genericService";
import { LaunchService } from "./launchServices";


export const rocketService = new CrudService<Rocket>(repositories.rocketRepository);
export const launchService = new LaunchService(repositories.launchRepository);
export const crewService= new CrewService(repositories.crewRepository);
export const crewManService = new CrewmanService(repositories.crewmanRepository);