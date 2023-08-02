const Game = require("./Game");

let g1 = Game.newGame("Sid","Ram")
//let g2 = Game.newGame("Ramesh","Suresh")

console.log(g1.play(0));
console.log(g1.play(4));
console.log(g1.play(1));
console.log(g1.play(6));
console.log(g1.play(2));
//console.log(g1.play(5));