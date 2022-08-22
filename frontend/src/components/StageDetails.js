import { useSelector, useDispatch } from "react-redux";
import ShowTeam from "./ShowTeam.js"
import {Link, useParams} from "react-router-dom";
import Rewards from "./Rewards";
import { loadUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./StageDetails.css"
import { selectEnemyTeam } from "../libs/Auxiliares";


export default function StageDetails(){

    const user = useSelector(state=> state.user)
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myTeam = [...user.assets];
    
    const stage = Number(params.id);
    const enemyTeam = selectEnemyTeam(stage)

    const figthHandler = async () =>{

        let res = await fetch("/api/characters/fight",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify({
                myTeam,
                enemyTeam,
                stage,
                owner: user.id
            })
        })

        res = await res.json();

        dispatch(loadUser(res));

        navigate("/LeagueApp3/Dashboard")

    }

    return(
        <div className="StageDetailsContainer">
            <ShowTeam team={enemyTeam}/>
            <h1>VS</h1>
            <ShowTeam team={myTeam}/>
            <Rewards stage={params.id}/>
            <div>
            <Link to="/LeagueApp3/Road" className="button">Volver</Link>
            <button onClick={figthHandler} className="button">Luchar</button> 
            </div>
        </div>
    )
}