import { deleteCharacter, getCharacter, getCharacters, levelUP, postCharacter, putCharacter, vsTeams } from "../controllers/character.controllers.js";
import { Router } from "express";

const characterRouter = Router();

characterRouter.get("/", getCharacters);

characterRouter.post("/", postCharacter);

characterRouter.put("/:id", putCharacter);

characterRouter.delete("/:id", deleteCharacter);

characterRouter.get("/:id", getCharacter);

characterRouter.post("/fight", vsTeams);

characterRouter.post("/levelup", levelUP);


export default characterRouter;