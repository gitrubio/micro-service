import express, { Response, Request } from "express";
import { ITable } from "../../../interfaces/global.interfaces";
import { succes, error } from "../../../network/response";
import authController from "./index";

const authRouter = express.Router();

authRouter.post("/login", async function (req, res) {
  try {
    const user = req.body;
    const data = await authController.login(user.username, user.password);
    succes(req, res, data, 200);
  } catch (err) {
    console.log(err)
    error(req, res, 'informacion invalida', 500);
  }
});

export default authRouter;
