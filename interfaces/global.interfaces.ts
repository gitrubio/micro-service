export interface IDatabase {
  [key: string]: (ITable | IAuth)[] 
}

export interface ITable {
  id        : number;
  name      : string;

}


export interface IAuth {
  id : number ;
  username : string ;
  password : string ;
}
export interface dbFunction {
  list  : <T>(tabla: string) => Promise<T[]>;
  get   : <T>(tabla: string, id: number) => Promise<T | undefined>;
  upsert: (tabla: string, data: (ITable | IAuth)) => Promise<number>;
  db    : IDatabase;
}