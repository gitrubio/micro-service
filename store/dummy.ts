import { IAuth, IDatabase, ITable } from "../interfaces/global.interfaces"
import { v4 as uuid} from 'uuid'
const db : IDatabase = {
    user :[{
        id : uuid() ,
        name : 'carlos rubio',
        username : 'cositas'
    },
    {
        id : uuid() ,
        name : 'jona than',
        username : 'jonkakas'
    }],
    auth : []
}


async function list<T>(tabla : string) : Promise<T[]>{
    return db[tabla] as T[]
}

async function get<T>(tabla : string, id : string) : Promise<T>{
    const col = await list<ITable>(tabla)
    return  col.find((item : any )=> item.id === id) as T
}

async function upsert<T>(tabla : string, data : ITable | IAuth ) : Promise<T>{
     db[tabla].push(data)
     console.log(db)
     return data as T;
}

async function remove(tabla : string, id : string){
    return true;
}

async function query(tabla : string , q : {[key : string] : any}) : Promise<any>{
    const col = await list<IAuth>(tabla)
    let keys = Object.keys(q)
    let key = keys[0]
    return col.find((item : any)=> item[key] === q[key])
}
export default {
    list,
    get,
    upsert,
    query,
    db
}