import data from "../playersData.json";
import {selectRandCuadratic} from "../libs/Auxiliares.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loadUser} from "../features/user/userSlice";
import "./CreateCharacter.css"

export default function CreateCharacter() {

    const navigate = useNavigate();

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    const typeGroup = type => {
        const res = [];
        for(const key in data){
            if(data[key].tags.includes(type)){
                res.push(key)
            }
        }
        return res;
    }

    const createCharacter = async (type) => {

        const group = typeGroup(type);

        const [name, rarity] = selectRandCuadratic(group);
        const training = false;
        const endTrainingAt = 0;
        const owner = user.id;
        const stats = data[name].stats;
        const URLImg = data[name].imgUrl;
        const level = 1;
        const token = user.token;
        const body = {name, rarity, owner, stats, URLImg, level, training, endTrainingAt, token};
        await fetch("/api/characters", {
            method:"POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        })

        let actualUser = await fetch("/api/users/"+user.id);
        actualUser = await actualUser.json();

        const postUser ={
            username : user.username,
            token: user.token,
            id: user.id,
            assets: actualUser.assets,
            gold: user.gold,
            exp: user.exp,
            energy: user.energy,
            actualStage: user.actualStage
        }

        dispatch(loadUser(postUser));

        navigate("/LeagueApp3/Dashboard");
    }

    return(
        <div className="CreateContainer">
            <h1>Choose a class</h1>
            <ul>
                <li onClick={() => createCharacter("Tank")} className="Election" style={{backgroundImage: `url(${data["Aatrox"].imgUrl})`,}}></li>
                <li onClick={() => createCharacter("Assassin")} className="Election" style={{backgroundImage: `url(${data["Ahri"].imgUrl})`,}}></li>
                <li onClick={() => createCharacter("Marksman")} className="Election" style={{backgroundImage: `url(${data["Ashe"].imgUrl})`,}}></li>
            </ul>
        </div>
    )
}