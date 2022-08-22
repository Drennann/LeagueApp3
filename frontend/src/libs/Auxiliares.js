import data from "../playersData.json"

export function selectRandCuadratic(arr){
    const tmp = (Math.random() + Math.random())/2;
    const index = Math.floor(tmp * arr.length);
    return [arr[index], tmp];
}

export function selectEnemyTeam(stage){
    const enemies = Math.ceil(stage/5);
    const enemyTeam = [];
    const arr = Object.keys(data);
    
    for(let i = 0; i < enemies; i++){
        enemyTeam.push(data[selectRandCuadratic(arr)[0]]);
    } 

    return enemyTeam;
}