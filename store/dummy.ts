import { IDatabase, ITable } from "../interfaces/global.interfaces"

const db : IDatabase = {
    user :[{
        id : 1 ,
        name : 'carlos rubio'
    },
    {
        id : 2 ,
        name : 'jona than'
    }]
}


async function list(tabla : string){
    return db[tabla]
}

async function get(tabla : string, id : number){
    const col = await list(tabla)
    return col.find(item => item.id === id)
}

async function upset(tabla : string, data : ITable){
    return db[tabla].push(data)
}

async function remove(tabla : string, id : number){
    return true;
}

export default {
    list,
    get,
    upset,
    db
}