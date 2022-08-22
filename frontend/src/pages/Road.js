import Level from "../components/Level.js";
import "./Road.css";
import {useSelector} from "react-redux";

export default function Road(){

    const user = useSelector(state=> state.user);
    console.log(user)

    return(
        <div className="RoadContainer ">
            <div className={user.actualStage>=1? "show": "hidden"}> <Level img = {require("../components/imgs/bronze_v.png")} stage={1}></Level></div>
            <div className={user.actualStage>=2? "show": "hidden"}> <Level img = {require("../components/imgs/bronze_iv.png")} stage={2}></Level></div>
            <div className={user.actualStage>=3? "show": "hidden"}> <Level img = {require("../components/imgs/bronze_iii.png")} stage={3}></Level></div>
            <div className={user.actualStage>=4? "show": "hidden"}> <Level img = {require("../components/imgs/bronze_ii.png")} stage={4}></Level></div>
            <div className={user.actualStage>=5? "show": "hidden"}> <Level img = {require("../components/imgs/bronze_i.png")} stage={5}></Level></div>
            <div className={user.actualStage>=6? "show": "hidden"}> <Level img = {require("../components/imgs/silver_v.png")} stage={6}></Level></div>
            <div className={user.actualStage>=7? "show": "hidden"}> <Level img = {require("../components/imgs/silver_iv.png")} stage={7}></Level></div>
            <div className={user.actualStage>=8? "show": "hidden"}> <Level img = {require("../components/imgs/silver_iii.png")} stage={8}></Level></div>
            <div className={user.actualStage>=9? "show": "hidden"}> <Level img = {require("../components/imgs/silver_ii.png")} stage={9}></Level></div>
            <div className={user.actualStage>=10? "show": "hidden"}> <Level img = {require("../components/imgs/silver_i.png")} stage={10}></Level></div>
            <div className={user.actualStage>=11? "show": "hidden"}> <Level img = {require("../components/imgs/gold_v.png")} stage={11}></Level></div>
            <div className={user.actualStage>=12? "show": "hidden"}> <Level img = {require("../components/imgs/gold_iv.png")} stage={12}></Level></div>
            <div className={user.actualStage>=13? "show": "hidden"}> <Level img = {require("../components/imgs/gold_iii.png")} stage={13}></Level></div>
            <div className={user.actualStage>=14? "show": "hidden"}> <Level img = {require("../components/imgs/gold_ii.png")} stage={14}></Level></div>
            <div className={user.actualStage>=15? "show": "hidden"}> <Level img = {require("../components/imgs/gold_i.png")} stage={15}></Level></div>
            <div className={user.actualStage>=16? "show": "hidden"}> <Level img = {require("../components/imgs/platinum_v.png")} stage={16}></Level></div>
            <div className={user.actualStage>=17? "show": "hidden"}> <Level img = {require("../components/imgs/platinum_iv.png")} stage={17}></Level></div>
            <div className={user.actualStage>=18? "show": "hidden"}> <Level img = {require("../components/imgs/platinum_iii.png")} stage={18}></Level></div>
            <div className={user.actualStage>=19? "show": "hidden"}> <Level img = {require("../components/imgs/platinum_ii.png")} stage={19}></Level></div>
            <div className={user.actualStage>=20? "show": "hidden"}> <Level img = {require("../components/imgs/platinum_i.png")} stage={20}></Level></div>
            <div className={user.actualStage>=21? "show": "hidden"}> <Level img = {require("../components/imgs/diamond_v.png")} stage={21}></Level></div>
            <div className={user.actualStage>=22? "show": "hidden"}> <Level img = {require("../components/imgs/diamond_iv.png")} stage={22}></Level></div>
            <div className={user.actualStage>=23? "show": "hidden"}> <Level img = {require("../components/imgs/diamond_iii.png")} stage={23}></Level></div>
            <div className={user.actualStage>=24? "show": "hidden"}> <Level img = {require("../components/imgs/diamond_ii.png")} stage={24}></Level></div>
            <div className={user.actualStage>=25? "show": "hidden"}> <Level img = {require("../components/imgs/diamond_i.png")} stage={25}></Level></div>
            <div className={user.actualStage>=26? "show": "hidden"}> <Level img = {require("../components/imgs/master.png")} stage={26}></Level></div>
            <div className={user.actualStage>=27? "show": "hidden"}> <Level img = {require("../components/imgs/challenger.png")} stage={27}></Level></div>
        </div>
    )
}