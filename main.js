const prompt = require("prompt-sync")();

let num = (prompt("Im thinking of a number 1-100, take a guess : "));
const answer = gen;

function gen(){
    return 1 + Math.floor(Math.random()* 100);
}

while (num < gen || num > gen){

    if (num === gen){
    console.log("You have entered the correct number !:" + gen)
}
    else if (num > gen){
    console.log("Your guess was too high: " + num)
}
    else if (num < gen){
    console.log("Your guess was too low: " + num)
}   








console.log(gen())}