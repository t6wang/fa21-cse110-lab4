let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

let count = Object.keys(statistics).length;
var keyNames = Object.keys(statistics);
for(let i = 0; i < count; i++){
    key_name = keyNames[i];
    value = statistics[key_name];
    if(key_name.charAt(0) == 'r' || value % 2 != 0){
        console.log(value);
    } 
}
