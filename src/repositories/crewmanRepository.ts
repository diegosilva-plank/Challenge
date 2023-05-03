import { FindManyOptions, Repository } from "typeorm";
import { connectionSource } from "../database/ormconfig";
import { CrewmanDB } from "../database/models/CrewmanDB";
import { CrudRepository } from "./crudRepository";
import { Crewman } from "../entities/Crewman";

export class CrewmanRepository implements CrudRepository<Crewman> {

  repo: Repository<CrewmanDB>

  constructor() {
    this.repo = connectionSource.getRepository(CrewmanDB);
  }

  async get(filter?: Partial<Crewman>): Promise<Crewman[]> {
    const filterDB = filter as FindManyOptions<CrewmanDB>
    const result = await this.repo.find(filterDB)
    return result as Crewman[]
  } 

  async create(data: Omit<Crewman, "id">): Promise<Crewman> {
    const dataDB = data as Omit<CrewmanDB, 'id'> 
    const created = this.repo.create(dataDB)
    const result = await this.repo.save(created)
    return result as Crewman
  }

  async update(id: string, entity: Partial<Omit<Crewman, "id">>): Promise<Crewman> {
    const entityDB = entity as Partial<Omit<CrewmanDB, "id">>
    const found = await this.repo.findOneBy({ id } as any)
    
    if (!found) {
      throw new Error("Instance not found")
    }

    const updated = { ...found, ...entity }
    const result = await this.repo.save(updated)
    return result as Crewman
  }

  async delete(id: string): Promise<boolean> {
    const found = await this.repo.findOneBy({ id } as any)
    if (!found) return false
    await this.repo.delete(id);
    return true
  }
}