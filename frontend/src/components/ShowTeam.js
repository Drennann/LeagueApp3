

export default function ShowTeam({team}){
    return(
        <div>
            {team.map((c, index) => <img className="target" width={154} height={280} alt="champion" src={c.imgUrl || c.URLImg} key={index}></img>)}
        </div>
    )
}