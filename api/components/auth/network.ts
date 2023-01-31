import express, { Response, Request } from "express";
import { ITable, IAuth } from '../../../interfaces/global.interfaces';
import responses from "../../../network/response";
import authController from "./index";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.get("/", show);


async function login(req :Request, res : Response) {
  try {
    const user = req.body;
    const data = await authController.login(user.username, user.password);
    responses.succes(req, res, data, 200);
  } catch (err : any ) {
    console.log(err)
    responses.error(req, res, err.message , 500);
  }
}


async function show(req :Request, res : Response) {
  try {
  const data  = await authController.getAll<IAuth>()
  responses.succes(req, res, data, 200);
  } catch (err) {
    console.log(err)
    responses.error(req, res, 'informacion no encontrada', 500);
  }
}
export default authRouter;
