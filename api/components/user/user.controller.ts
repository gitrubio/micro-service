import storeP from "../../../store/dummy";
import { dbFunction } from '../../../interfaces/global.interfaces';

const TABLA = 'user'

export default function (db : dbFunction) {
  let store = db;
  if (!store) {
    store = storeP;
  }

  function list() {
    return store.list(TABLA);
  }

  function get(id: number) {
    return store.get(TABLA,id);
  }

  return {
    list,
    get
  }
}