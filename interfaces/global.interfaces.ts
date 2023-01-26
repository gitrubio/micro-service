export interface IDatabase {
    [ key : string ] : ITable[]
}

export interface ITable {
  id: number;
  name: string;
}

export interface dbFunction {
    list: (tabla: string) => Promise<ITable[]>;
    get: (tabla: string, id: number) => Promise<ITable | undefined>;
    upset: (tabla: string, data: ITable) => Promise<number>;
    db: IDatabase;
}