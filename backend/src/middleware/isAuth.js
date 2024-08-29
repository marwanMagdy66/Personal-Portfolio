import jwt from "jsonwebtoken";
import { asyncHandelar } from "../utils/asyncHandelar.js";
import { Token } from "../../db/token.js";
import { User } from "../../db/users.js";
export const isAuth = asyncHandelar(async (req, res, next) => {
  let { token } = req.headers;
  if (!token) {
    return next(new Error("token not found ", { cause: 400 }));
  }
  if (!token.startsWith(process.env.BEARER_KEY)) {
    return next(new Error("invalid token! "));
  }

  token = token.split(process.env.BEARER_KEY)[1];

  //check token valid or not
  const tokenDB = await Token.findOne({ token, isValid: true });
  if (!tokenDB) return next(new Error("Token expired!", { cause: 401 }));

  const payload = jwt.verify(token, process.env.TOKEN_KEY);

  //token xxx cant destroy
  const isUser = await User.findById(payload.id);
  if (!isUser) {
    return next(new Error("user not found ", { cause: 404 }));
  }

  //pass user to the next controller
  req.user = isUser;
  // console.log(req.user);
  //call next controller
  return next();
});
