import { IAuth, IDatabase, ITable } from "../interfaces/global.interfaces"

const db : IDatabase = {
    user :[{
        id : 1 ,
        name : 'carlos rubio'
    },
    {
        id : 2 ,
        name : 'jona than'
    }],
    auth : []
}


async function list<T>(tabla : string) : Promise<T[]>{
    return db[tabla] as T[]
}

async function get<T>(tabla : string, id : number) : Promise<T>{
    const col = await list<ITable>(tabla)
    return  col.find((item : any )=> item.id === id) as T
}

async function upsert(tabla : string, data : ITable | IAuth ){
    return db[tabla].push(data)
}

async function remove(tabla : string, id : number){
    return true;
}

export default {
    list,
    get,
    upsert,
    db
}