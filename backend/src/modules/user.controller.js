import jwt from "jsonwebtoken";
import { User } from "../../db/users.js";
import { asyncHandelar } from "../utils/asyncHandelar.js ";
import bcryptjs from "bcryptjs";
import { Token } from "../../db/token.js";
import { sendEmail } from "../utils/sendEmails.js";

export const signup = asyncHandelar(async (req, res, next) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new Error("user is already exist"));
  }
  //hash password
  const hashedPassword = await bcryptjs.hash(password, 8);

  const user = await User.create({ name, email, password: hashedPassword });
  res
    .status(201)
    .json({ success: true, message: "user created successfully", data: user });
});

export const login = asyncHandelar(async (req, res, next) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (!userExist) {
    return next(new Error("username or password is invalid"));
  }
  const decode = await bcryptjs.compare(password, userExist.password);
  if (!decode) {
    return next(new Error("invalid password"));
  }
  const token = await jwt.sign(
    { id: userExist._id, name: userExist.name, email: userExist.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: "1h",
    }
  );
  await Token.create({ token, userId: userExist._id });

  res.status(201).json({
    success: true,
    message: "user logedin",
    token: token,
    name: userExist.name,
    email: userExist.email,
  });
});

export const sendNewEmail = asyncHandelar(async (req, res, next) => {
  const { email, newMessage } = req.body;
  console.log('Received email:', email); // Log the received email

  const userExist = await User.findOne({ email });
  if (!userExist) {
    return next(new Error("user is not exist",{cause:404}));  
  }
  const message = await sendEmail({
    to: "marwanmagdy826@gmail.com",
    subject: `Email From ${userExist.name} `,
    html: `<div>${newMessage}</div>`,
  });
  if(!message)
    return next(new Error("Failed to send email"));
  res.status(201).json({
    success: true,
    message: "email sent successfully",
  })
});

