import { FindManyOptions, Repository } from "typeorm";
import { connectionSource } from "../database/ormconfig";
import { CrewDB } from "../database/models/CrewDB";
import { Crew } from "../entities/Crew";
import { CrudRepository } from "./crudRepository";

export class CrewRepository implements CrudRepository<Crew> {

  repo: Repository<CrewDB>

  constructor() {
    this.repo = connectionSource.getRepository(CrewDB);
  }

  async get(filter?: Partial<Crew>, relations?: any): Promise<Crew[]> {
    const filterDB = { where: filter, relations }
    const result = await this.repo.find(filterDB)
    console.log(result)
    return result as Crew[]
  } 

  async create(data: Omit<Crew, "id">): Promise<Crew> {
    const dataDB = data as Omit<CrewDB, 'id'> 
    const created = this.repo.create(dataDB)
    const result = await this.repo.save(created)
    return result as Crew
  }

  async update(id: string, entity: Partial<Omit<Crew, "id">>): Promise<Crew> {
    const entityDB = entity as Partial<Omit<CrewDB, "id">>
    const found = await this.repo.findOneBy({ id } as any)
    
    if (!found) {
      throw new Error("Instance not found")
    }

    const updated = { ...found, ...entity }
    const result = await this.repo.save(updated)
    return result as Crew
  }

  async delete(id: string): Promise<boolean> {
    const found = await this.repo.findOneBy({ id } as any)
    if (!found) return false
    await this.repo.delete(id);
    return true
  }
}