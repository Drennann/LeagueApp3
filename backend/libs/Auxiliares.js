export function teamPower(arr){
  let res = 0;
  for(let i = 0; i < arr.length; i++){
    res += arr[i].stats.hp;
  }
  return res;
}