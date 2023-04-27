import { Crew } from "../entities/Crew";
import { Crewman } from "../entities/Crewman";
import { Launch } from "../entities/Launch";
import { Rocket } from "../entities/Rocket";
import { CrudRepository } from "./genericRepository";

export const rocketRepository = new CrudRepository(Rocket);
export const launchRepository = new CrudRepository(Launch);
export const crewRepository = new CrudRepository(Crew);
export const crewManRepository = new CrudRepository(Crewman);