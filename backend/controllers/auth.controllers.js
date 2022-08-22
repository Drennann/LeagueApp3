import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const loginAuth = async (req, res) => {
    try{
        const {password, username} = req.body;
        const user = (await User.find({username}))[0];
    
        if (bcrypt.compareSync(password, user.passwordHashed)){
            const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60*60*24})
            res.json({token, id:user._id, username, assets: user.assets, gold: user.gold, exp: user.exp, energy: user.energy, actualStage: user.actualStage})
        }
        else{
            res.send("Credenciales incorrectas.")
        }
    }catch(e){
        res.status(400).send(e)
    }
}
export const registerAuth = async (req, res) => {
    try{
        const {username, password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(password, salt);
        const newUser = new User({username, passwordHashed, assets: [], gold: 0, exp: 0, energy:10,actualStage:1});
        await newUser.save();
        const token = jwt.sign({id: newUser._id}, process.env.SECRET, {expiresIn: 60*60*24})
        res.json({token, id:newUser._id, username, assets: newUser.assets, gold: 0, exp: 0, energy:10, actualStage:1})
    }
    catch(e){
        res.status(400).send(e)
    }
}