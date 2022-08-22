import { useDispatch} from "react-redux";
import { loadUser } from "../features/user/userSlice";
import {useNavigate, Link} from "react-router-dom";
import "./Register.css"


export default function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        let userFetched = await fetch("/api/auth/register", {
            method:"POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({username, password})
        })

        userFetched = await userFetched.json();

        dispatch(loadUser(userFetched));

        localStorage.setItem("token", userFetched.token);
        localStorage.setItem("username", userFetched.username);
        localStorage.setItem("assets", JSON.stringify(userFetched.assets));

        navigate("/LeagueApp3/Dashboard")
    }

    return(
        <>
        <div className="Register">
            <form onSubmit={onSubmitHandler}>
                <h1>Username</h1>
                <input type="text" name="username"></input>
                <h1>Password</h1>
                <input type="password" name="password"></input>
                <button> Register </button>
            </form>
        </div>
        <div className="flex">
            <h2 className="bottom">Have an account? <Link to="/LeagueApp3/Login">Login</Link></h2>
        </div>
        </>
    )
}