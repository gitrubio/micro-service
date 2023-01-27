import { dbFunction } from "../../../interfaces/global.interfaces";
import storeP from "../../../store/dummy";

const TABLA = 'auth'
export default function (db : dbFunction) {
    let store = db;
    if (!store) {
      store = storeP;
    }
  function upsert( data : any) {
    const authData = {
        id : data.id,
        name : data.username || '',
        password : data.password || ''
    }
    return store.upsert(TABLA,authData)
  }

return {
    upsert
 }
}