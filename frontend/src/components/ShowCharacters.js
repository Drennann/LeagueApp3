import { useSelector } from "react-redux"
import "./ShowCharacters.css"
import { useNavigate } from "react-router-dom";

export default function ShowCharacter(){

    const navigate = useNavigate();

    const user = useSelector(state => state.user)

    return(
        <div className="CharactersContainer">
            {user.assets.map(c => 
            
            <div className="Character" key={c._id}>
                <img className="centralImage"alt="Champion" src={c.URLImg} onClick={()=>{navigate("/LeagueApp3/Character/"+c._id)}}></img>
                <p>Level: {Math.floor(c.level)}</p>
            </div>)}
        </div>
    )
}