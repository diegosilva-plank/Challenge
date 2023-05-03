import { FindManyOptions, Repository } from "typeorm";
import { connectionSource } from "../database/ormconfig";
import { LaunchDB } from "../database/models/LaunchDB";
import { Launch } from "../entities/Launch";
import { CrudRepository } from "./crudRepository";

export class LaunchRepository implements CrudRepository<Launch> {

  repo: Repository<LaunchDB>

  constructor() {
    this.repo = connectionSource.getRepository(LaunchDB);
  }

  async get(filter?: Partial<Launch>): Promise<Launch[]> {
    const filterDB = filter as FindManyOptions<LaunchDB>
    const result = await this.repo.find(filterDB)
    return result as Launch[]
  } 

  async create(data: Omit<Launch, "id">): Promise<Launch> {
    const dataDB = data as Omit<LaunchDB, 'id'> 
    const created = this.repo.create(dataDB)
    const result = await this.repo.save(created)
    return result as Launch
  }

  async update(id: string, entity: Partial<Omit<Launch, "id">>): Promise<Launch> {
    const entityDB = entity as Partial<Omit<LaunchDB, "id">>
    const found = await this.repo.findOneBy({ id } as any)
    
    if (!found) {
      throw new Error("Instance not found")
    }

    const updated = { ...found, ...entity }
    const result = await this.repo.save(updated)
    return result as Launch
  }

  async delete(id: string): Promise<boolean> {
    const found = await this.repo.findOneBy({ id } as any)
    if (!found) return false
    await this.repo.delete(id);
    return true
  }
}