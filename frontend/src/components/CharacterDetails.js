import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { loadUser } from "../features/user/userSlice";
import "./CharacterDetails.css"

export default function CharacterDetails(){

    const [champ, setChamp] = useState({})

    const user = useSelector(state=> state.user);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = params.id;

    useEffect(()=>{
        const findChamp = user.assets.find(c=>{
            return c._id === id
        })

        setChamp(findChamp)

    },[champ.level])

    const levelUPHandler = async n =>{
        if(user.exp >= n){
            let res = await fetch("/api/characters/levelup", {
                method:"POST",
                headers:{"Content-type": "Application/json"},
                body: JSON.stringify(champ)
            });
            res= await res.json();
            dispatch(loadUser(res));
            navigate("/LeagueApp3/Dashboard")
        }
        else{
            //no hay suficiente energia
        }
    }

    return(
        <>
            <h1 className="expav">Experience avaiable: {user.exp}</h1>
        <div className="CharacterDetailsContainer">
            {champ.stats? <div className="CharacterCard">
                <img alt="champ" src={champ.URLImg} className="image"></img>
                <h1 className="hp">HP: {Math.floor(champ.stats.hp)} + {Math.floor(champ.stats.hpperlevel*10)/10} xLVL</h1>
                <h1 className="armor">Armor: {Math.floor(champ.stats.armor)} + {Math.floor(champ.stats.armorperlevel*10)/10} xLVL</h1>
                <h1 className="attackdamage">Attack: {Math.floor(champ.stats.attackdamage*10)/10} + {champ.stats.attackdamageperlevel} xLVL</h1>
                <h1 className="tolevelup">Experience to level up: {champ.level*100}</h1>
                <div className="buttons">
                    <Link to="/LeagueApp3/Dashboard" className="button">Volver</Link>
                    <button onClick={() => levelUPHandler(champ.level*100)}>Level UP</button>
                </div>
            </div>: <p>Campeon no encontrado</p>}
        </div>
        </>
    )
}