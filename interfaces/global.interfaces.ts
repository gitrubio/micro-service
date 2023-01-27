export interface IDatabase {
  [key: string]: ITable[] 
}

export interface ITable {
  id        : number;
  name      : string;
  password? : string;
}

export interface dbFunction {
  list  : (tabla: string) => Promise<ITable[]>;
  get   : (tabla: string, id: number) => Promise<ITable | undefined>;
  upsert: (tabla: string, data: ITable) => Promise<number>;
  db    : IDatabase;
}