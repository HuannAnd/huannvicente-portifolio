import { MongoClient, Document, Filter, FindOptions, WithId, DeleteOptions, ObjectId, OptionalId, Collection } from "mongodb";

import { BaseDocument } from '@/@types/common'

interface Func<T, TResult> {
  (obj: T): TResult;
}

export abstract class BaseRepository<TSchema extends BaseDocument> {
  // protected repository: Db;
  protected client: MongoClient;
  protected collectionName: string;

  constructor(collectionName: string) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;

    if (!uri) {
      throw new Error("The enviroment variable NEXT_PUBLIC_MONGODB_URL is undefined");
    }

    console.log('uri',uri)
    this.client = new MongoClient(uri);
    this.collectionName = collectionName;
  }

  private async withDatabase<T>(action: Func<Collection<TSchema>, Promise<T>>): Promise<T> {
    let result: T;
  
    try {
      console.log('Connecting to the database...');
      await this.client.connect();
  
      const collection = this.client.db('local').collection(this.collectionName) as Collection<TSchema>
      console.log("images collection: ", collection)
  
      console.log('Executing database action...');
      result = await action(collection);
  
      console.log('Database action completed successfully.');
      return result;
    } catch (error) {
      console.error('Error executing database action:', error);
      throw error;
    } finally {
      console.log('Closing the database connection...');
      await this.client.close();
      console.log('Database connection closed.');
    }
  }

  protected async getById(id: string): Promise<TSchema | undefined> {
    const _id = new ObjectId(id);
    
    return await this.withDatabase<TSchema | undefined>(async (collection) => {
      const result = await collection.findOne({ _id } as Filter<TSchema>);
  
      return this.serialize(result);
    });
  }

  protected async getAll(filter?: Filter<TSchema>, options?: FindOptions<TSchema>): Promise<TSchema[]> {
   return await this.withDatabase<TSchema[]>(async (collection) => {
      const data = await collection.find(filter as Filter<Document>, options).toArray();
      console.log('data: ',data)
      
      const serialized =  data.map(x => this.serialize(x)!)
      console.log('serialized: ', serialized)
      return serialized
    })
  }

  protected async add(data: TSchema | OptionalId<TSchema>): Promise<void> {
    await this.withDatabase(async (collection) => {
      await collection.insertOne(data as any);
    });
  }
  
  protected async delete(filter: Filter<TSchema>, options?: DeleteOptions) {
    await this.withDatabase(async (collection) => {
      await collection.deleteOne(filter as Filter<Document>, options);
    });
  }

  private serialize(notSerializedPlant?: WithId<Document> | WithId<TSchema> | null): TSchema | undefined {
    if (!notSerializedPlant) return undefined;

    return { ...notSerializedPlant, _id: notSerializedPlant._id.toString() } as TSchema;
  }
}