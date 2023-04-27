import { EntityTarget, Repository } from "typeorm";
import { connectionSource } from "../../ormconfig";

export class CrudRepository<T> {

  repo: Repository<T>

  constructor(model: EntityTarget<T>) {
    this.repo = connectionSource.getRepository(model)
  }

  async get(filter?: Partial<T>): Promise<T[]> {
    return await this.repo.find(filter)
  }

  async create(data: Omit<T, "id">): Promise<T> {
    const created = this.repo.create(data as T)
    return await this.repo.save(created)
  }

  async update(id: string, entity: Partial<Omit<T, "id">>): Promise<T> {
    const found = await this.repo.findOneBy({ id } as any)
    
    if (!found) {
      throw new Error("Instance not found")
    }

    const updated = { ...found, ...entity }
    return await this.repo.save(updated)
  }

  async delete(id: string): Promise<boolean> {
    const found = await this.repo.findOneBy({ id } as any)
    if (!found) return false
    await this.repo.delete(id);
    return true
  }
}