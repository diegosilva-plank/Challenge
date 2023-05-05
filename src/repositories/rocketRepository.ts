import { FindManyOptions, Repository } from "typeorm";
import { connectionSource } from "../database/ormconfig";
import { RocketDB } from "../database/models/RocketDB";
import { Rocket } from "../entities/Rocket";
import { CrudRepository } from "./crudRepository";

export class RocketRepository implements CrudRepository<Rocket> {

  repo: Repository<RocketDB>

  constructor() {
    this.repo = connectionSource.getRepository(RocketDB);
  }

  async get(filter?: Partial<Rocket>): Promise<Rocket[]> {
    const filterDB = { where: filter }
    const result = await this.repo.find(filterDB)
    return result as Rocket[]
  } 

  async create(data: Omit<Rocket, "id">): Promise<Rocket> {
    const dataDB = data as Omit<RocketDB, 'id'> 
    const created = this.repo.create(dataDB)
    const result = await this.repo.save(created)
    return result as Rocket
  }

  async update(id: string, entity: Partial<Omit<Rocket, "id">>): Promise<Rocket> {
    const entityDB = entity as Partial<Omit<RocketDB, "id">>
    const found = await this.repo.findOneBy({ id } as any)
    
    if (!found) {
      throw new Error("Instance not found")
    }

    const updated = { ...found, ...entity }
    const result = await this.repo.save(updated)
    return result as Rocket
  }

  async delete(id: string): Promise<boolean> {
    const found = await this.repo.findOneBy({ id } as any)
    if (!found) return false
    await this.repo.delete(id);
    return true
  }
}