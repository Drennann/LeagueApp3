import fs from "fs";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
export const data = require("./apiresponse.json");

function transformjson(){

    let res = {};

    for(const key in data.data){    
        let imgUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+key+"_0.jpg"
        let stats = data.data[key].stats;
        let tags = data.data[key].tags;
        res[key] = {
            imgUrl,
            stats,
            tags
        }
    }

    res =JSON.stringify(res);

    fs.writeFile("playersData.json", res, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    
}

transformjson()
