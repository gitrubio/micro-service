import express, { Response, Request } from "express";
import { ITable } from "../../../interfaces/global.interfaces";
import { succes, error } from "../../../network/response";
import userController from "./index";
import auth from './secure'
const userRouter = express.Router();

userRouter.get("/", list);
userRouter.get("/:id", get);
userRouter.post("/", upsert);
userRouter.put("/",auth('update'), upsert);

async function list(req: Request, res: Response) {
  try {
    const lista = await userController.list<ITable>();
    succes(req, res, lista, 200);
  } catch (err) {
    console.log(err);
    error(req, res, err, 500);
  }
}

async function get(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const lista = await userController.get<ITable>(id);
    succes(req, res, lista, 200);
  } catch (err) {
    console.log(err);
    error(req, res, err, 500);
  }
}

async function upsert(req: Request, res: Response) {
  try {
    const user = await  userController.upsert(req.body);
    succes(req, res, user, 200);
  } catch (err) {
    console.log(err);
    error(req, res, err, 500);
  }
}

export default userRouter;
