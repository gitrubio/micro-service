export interface IDatabase {
  [key: string]: (ITable | IAuth)[] 
}

export interface ITable {
  id        : string;
  name      : string;

}


export interface IAuth {
  id : number ;
  username : string ;
  password : string ;
}
export interface dbFunction {  
  list: <T>(tabla: string) => Promise<T[]>;
  get: <T>(tabla: string, id: string) => Promise<T>;
  upsert: <T>(tabla: string, data: ITable | IAuth) => Promise<T>;
  query: (tabla: string, q: { [key: string]: any }) => Promise<any>;

  db: IDatabase;
}