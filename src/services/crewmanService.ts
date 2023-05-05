import { Crewman } from "../entities/Crewman";
import { CrudService } from "./genericService";

export class CrewmanService extends CrudService<Crewman> {
    async get(filter?: Partial<Crewman>): Promise<Crewman[]> {
     return await this.repository.get(filter, { relations: ['crews'] })
    }
}
