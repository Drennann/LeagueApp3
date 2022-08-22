import { useNavigate} from "react-router-dom";
import "./Level.css"

export default function Level({img, stage}){

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/LeagueApp3/Road/"+stage)
    }

    return(
        <div className ="Level">
            <img alt ="Level" src={img} onClick={onClickHandler}></img>
        </div>
    )
}