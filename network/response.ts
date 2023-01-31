import { Response, Request } from "express";
import { IResponse } from "./interfaces/response.interfaces";
 function succes(
  Req: Request,
  Res: Response,
  body: any,
  status: number
) {
  Res.status(status).send({
    error: false,
    status: status,
    body: body || null,
  } satisfies IResponse);
}

 function error(
  Req: Request,
  Res: Response,
  body: any,
  status?: number
) {  
    let statusCode = status || 500
    Res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: body,
  } satisfies IResponse);
}

export default {
  error,
  succes
}