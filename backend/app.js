import express from "express";
import mongoose from "./db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import morgan from "morgan";
import characterRouter from "./routes/character.routes.js";
import schedule from "node-schedule";
import User from "./models/User.js"
import{dirname, join} from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/characters", characterRouter)

schedule.scheduleJob("0 0 * * *", async ()=> {
    const users = await User.find();
    users.map(async (user) => {
        user.energy = 10;
        await user.save();
    })
})

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static( join(__dirname, "../frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../frontend/build/index.html"))
})

export default app;