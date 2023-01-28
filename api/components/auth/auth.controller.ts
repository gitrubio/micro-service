import { dbFunction, IAuth } from "../../../interfaces/global.interfaces";
import storeP from "../../../store/dummy";

const TABLA = 'auth'
export default function (db : dbFunction) {
    let store = db;
    if (!store) {
      store = storeP;
    }
  async function upsert( data : IAuth) {
    const authData  : IAuth= {
        id       : data.id,
        username : data.username || '',
        password : data.password || ''
    }
    return store.upsert(TABLA,authData)
  }

  async function login (username : string, password: string){
    const data = await store.query(TABLA,{username : username})
    return data;
  }

return {
    upsert,
    login
 }
}