import { Request } from "express";
import Jwt from "jsonwebtoken";
import { config } from "../config/config";
const  secret = config.jwt.secret
function sign(data: any) {
  return Jwt.sign(data, secret);
}

const check = {
  own: function (req: Request, owner: any) {
   const decoder = decodeHeader(req);
   console.log(decoder)

   if(decoder.id !== owner) throw new Error("Invalid Token");

  },
};

function verifyToken(token : string) : any{
    return Jwt.verify(token,secret)
}
function getToken(auth?: string) {
  if (!auth) throw new Error("token not found");

  if(auth.indexOf('Bearer ') === -1) throw new Error("invalid format");

  let token = auth.replace('Bearer ','')
  return token
}
function decodeHeader(req: Request) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  return verifyToken(token);

}

export default {
  sign,
  check,
};
