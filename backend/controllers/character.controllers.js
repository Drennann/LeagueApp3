import Character from "../models/Character.js";
import User from "../models/User.js"
import { teamPower } from "../libs/Auxiliares.js";
import jwt from "jsonwebtoken"

export const getCharacters = async (req, res )=> {
    try{
        const characters = await Character.find();
        res.send(characters);
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const postCharacter = async (req, res )=> {
    try{
        const {name, URLImg, stats, rarity, owner, level, training, endTrainingAt, token} =  req.body;
        let decoded = jwt.verify(token, process.env.SECRET);
        if(decoded.id == owner){
            const newCharacter = new Character({name, URLImg, stats, rarity, owner, level, training, endTrainingAt});
            await newCharacter.save();
            const user = await User.findById(owner);
            let assets = [...user.assets, newCharacter]
            await User.findByIdAndUpdate(owner, {assets});
            res.send("Character created.");
        }
        res.send("invalid Token")
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const putCharacter = async (req, res )=> {
    try{
        const {name, URLImg, stats, rarity, owner, level,training, endTrainingAt, token} =  req.body;
        let decoded = jwt.verify(token, process.env.SECRET);
        if(decoded.id == owner){
            const {id} = req.params;
            const characterModified = await Character.findByIdAndUpdate(id, {name, URLImg, stats, rarity, owner, level, training, endTrainingAt}, {new:true});
            const user = await User.findById(owner);
            const assetsModified = user.assets.map(c => c._id == id? characterModified : c);
            await User.findByIdAndUpdate(owner, {assets: assetsModified}, {new: true});
            res.send("Character actualized.");
        }
        res.send("Invalid token")
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const deleteCharacter = async (req, res )=> {
    try{
        const {id} = req.params;
        const characterToDelete = await Character.findById(id);
        const ownerID = characterToDelete.owner;
        const owner = await User.findById(ownerID);
        let decoded = jwt.verify(token, process.env.SECRET);
        if(decoded.id == owner){
            const assetsModified = owner.assets.filter(c => c._id != id);
            await User.findByIdAndUpdate(ownerID, {assets: assetsModified});
            await Character.findByIdAndDelete(id);
            res.send("Character deleted.");
        }
        res.send("Invalid Token")
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const getCharacter = async (req, res )=> {
    try{
        const {id} = req.params;
        const character = await Character.findById(id);
        res.send(character);
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const vsTeams = async (req, res) =>{
    const {myTeam, enemyTeam, owner, stage} = req.body;

    const enemyTeamPower = teamPower(enemyTeam);
    const myTeamPower = teamPower(myTeam);

    let foundUser = await User.findById(owner);


    await User.findByIdAndUpdate(owner, {energy: foundUser.energy - 1})

    const tmp = myTeamPower > enemyTeamPower;

    const rewards = tmp? {gold: stage*10, exp: stage*100} : {gold:0, exp: 50*stage};

    if(tmp){

        let actualStage;
        
        foundUser.actualStage == stage? actualStage = stage+1: actualStage = foundUser.actualStage;

        foundUser = await User.findByIdAndUpdate(owner, {gold: foundUser.gold + rewards.gold, exp: foundUser.exp + rewards.exp, actualStage}, {new:true});

    }
    else{
        foundUser = await User.findByIdAndUpdate(owner, {gold: foundUser.gold + rewards.gold, exp: foundUser.exp + rewards.exp}, {new:true});
    }

    res.json(foundUser)
}

export const levelUP = async(req, res) =>{

    const champ = req.body;

    const id = champ._id;
    const owner = champ.owner;
    const level = champ.level + 1;
    const attackdamage = champ.stats.attackdamage + champ.stats.attackdamageperlevel;
    const armor = champ.stats.armor + champ.stats.armorperlevel;
    const hp = champ.stats.hp + champ.stats.hpperlevel;

    const oldCharacter = await Character.findById(id);
    oldCharacter.level = level;
    oldCharacter.stats.attackdamage = attackdamage;
    oldCharacter.stats.armor = armor;
    oldCharacter.stats.hp = hp;
    const newCharacter = await Character.findByIdAndUpdate(id, oldCharacter,{new:true});

    
    const oldUser = await User.findById(champ.owner);
    const oldAssets = oldUser.assets;
    for(let i = 0; i < oldAssets.length; i++){
        if(oldAssets[i]._id == id){
            oldAssets[i] = newCharacter
        }
    }
    const tmp = await User.findByIdAndUpdate(champ.owner, {assets: oldAssets, exp: oldUser.exp-100*(level-1)}, {new:true})

    res.json(tmp);
}