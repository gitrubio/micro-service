import { dbFunction, IAuth } from "../../../interfaces/global.interfaces";
import storeP from "../../../store/dummy";
import auth from "../../../auth";
import bycrpt from "bcrypt";
const TABLA = "auth";
export default function (db: dbFunction) {
  let store = db;
  if (!store) {
    store = storeP;
  }
  async function getAll<T>() {
    return store.list<T>(TABLA)
  }
  async function upsert(data: IAuth) {
    const authData: IAuth = {
      id: data.id,
      username: data.username || "",
      password: (await bycrpt.hash(data.password, 5)) || "",
    };
    return store.upsert(TABLA, authData);
  }

  async function login(username: string, password: string) {
    const data = await store.query(TABLA, { username: username });
    const crypt = await bycrpt.compare(password, data.password);
    if (crypt) {
      return auth.sign(data);
    }else{
      throw new Error("informacion invalidaaaa");
    }
  }

  return {
    upsert,
    login,
    getAll
  };
}
