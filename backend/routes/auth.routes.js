import {Router} from "express";
import { loginAuth, registerAuth } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/login", loginAuth)
authRouter.post("/register", registerAuth)

export default authRouter;