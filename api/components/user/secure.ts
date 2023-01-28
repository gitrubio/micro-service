import { NextFunction, Request, Response } from "express";
import auth from "../../../auth";

export default function chechAuth(action: string) {
  return function middleware(req: Request, res: Response, next: NextFunction) {
    switch (action) {
      case "update":
          const owner = req.body.id;
          auth.check.own(req, owner);
          next()
        break;

      default:
        next();
    }
  };
}
