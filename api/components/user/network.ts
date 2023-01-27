import express, { response, Response } from "express";
import { succes, error} from "../../../network/response";
import userController from "./index";
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const lista = await userController.list();
    succes(req, res, lista, 200);
  } catch (err) {
    console.log(err)
    error(req, res, err, 500)
  }
});

userRouter.get("/:id", async (req, res) => {
    try {
      const id = +req.params.id
      const lista = await userController.get(id);
      succes(req, res, lista, 200);
    } catch (err) {
      console.log(err)
      error(req, res, err, 500)
    }
  });

export default userRouter;
