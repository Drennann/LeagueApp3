import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ShowCharacter from "../components/ShowCharacters";
import "./Dashboard.css"

export default function DashBoard() {

    const user = useSelector(state => state.user)

    return(
        <div>
            <ul>
                <li>Hello {user.username}</li>
                <li className="Energy">Energy: {user.energy}</li>
                <li className="Gold">Gold: {user.gold}</li>
                <li className="Exp">Experience: {user.exp}</li>
            </ul>
            <ul className="buttons">
                <li><Link to="/LeagueApp3/CreateCharacter" className="li">Create Character</Link></li>
                <li><Link to="/LeagueApp3/Road" className="li">Play Road</Link></li>
            </ul>
            <ShowCharacter/>
        </div>
    )
}