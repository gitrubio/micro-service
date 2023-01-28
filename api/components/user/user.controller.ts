import storeP from "../../../store/dummy";
import { dbFunction } from '../../../interfaces/global.interfaces';
import { v4 as uuid } from "uuid";
import auth from "../auth/index";
const TABLA = "user";

export default function (db: dbFunction) {
  let store = db;
  if (!store) {
    store = storeP;
  }

  function list<T>() {
    return store.list<T>(TABLA);
  }

  function get<T>(id: string) {
    return store.get<T>(TABLA, id);
  }

  async function upsert(body: any) {
    const user: any = {
      name: body.name,
      username: body.username,
    };
    if (body.id) {
      user.id = body.id;
    } else {
      user.id = uuid();
    }
    if(body.password || body.username) {
      await auth.upsert({
        id : user.id,
        username : user.username,
        password : body.password
      })
    }

    return store.upsert(TABLA,user)

  }

  return {
    list,
    get,
    upsert
  };
}
