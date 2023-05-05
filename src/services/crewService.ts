import { Crew } from "../entities/Crew";
import { CrudService } from "./genericService";

export class CrewService extends CrudService<Crew> {
    async get(filter?: Partial<Crew>): Promise<Crew[]> {
     return await this.repository.get(filter, ['crewmen'])
    }
}
