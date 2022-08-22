export default function Rewards({stage}){
    return(
        <div>
            <h1>Rewards:</h1>
            <h2>Experience: {stage*100}</h2>
            <h2>Gold: {stage*10}</h2>
        </div>
    )
}