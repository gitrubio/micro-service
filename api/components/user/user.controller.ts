import storeP from "../../../store/dummy";
import { dbFunction } from '../../../interfaces/global.interfaces';

const TABLA = 'user'

export default function (db : dbFunction) {
  let store = db;
  if (!store) {
    store = storeP;
  }

  function list<T>() {
    return store.list<T>(TABLA);
  }

  function get<T>(id: number) {
    return store.get<T>(TABLA,id);
  }

  return {
    list,
    get
  }
}