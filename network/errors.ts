import response from "./response";
import { Response, Request, NextFunction } from "express";

function errors(
  err: ErrorEvent,
  Req: Request,
  Res: Response,
  Next: NextFunction
) {
  console.error("[error]", err);

  const message = err.message || "Error interno";
  const status = 500;

  response.error(Req, Res, message, status);
}

export default errors;
