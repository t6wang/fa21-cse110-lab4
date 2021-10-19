
let d = new Date();
let time = d.toLocaleTimeString();

// console.log(time);

nIntervId = setInterval(function(){
    console.log(time); //output current time
    d.setSeconds(d.getSeconds() + 1); //increment time of date by one second
    time = d.toLocaleTimeString(); //update time string to output
}, 1000);

