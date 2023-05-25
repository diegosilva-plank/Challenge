export interface CrudRepository<T> {
  get: (filter?: Partial<T>) => Promise<T[]>
  create: (data: Omit<T, 'id'>) => Promise<T>
  update: (id: string, entity: Partial<Omit<T, 'id'>>) => Promise<T>
  delete: (id: string) => Promise<boolean>
}
