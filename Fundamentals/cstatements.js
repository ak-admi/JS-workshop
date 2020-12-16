var diceValue = Math.floor(Math.random() * 6) + 1;
console.log("Dice value:", diceValue);
if(diceValue % 2 != 0)
console.log("Is an odd number.");
console.log('"You have to be odd to be number one", Dr. Seuss');
var tossValue = Math.random();
console.log("Random toss value:", tossValue);
if(tossValue>= .5){
  console.log("Heads");
}
var target = Math.floor(Math.random() * 21) + 1;
var player = Math.floor(Math.random() * 21) + 1;
console.log("Target score:", target);
console.log("Player score:", player);
if (player >= target){
 console.log("Player wins: beats target by " + (player - target));
}else{
 console.log("Player loses: misses target by " + (target - player));
}
var target = Math.floor(Math.random() * 21) + 1;
var player = Math.floor(Math.random() * 21) + 1;
var lucky = Math.floor(Math.random() * 21) + 1;
var unlucky = Math.floor(Math.random() * 21) + 1;
console.log("Target score:", target);
console.log("Player score:", player);
console.log("Lucky score:", lucky);
console.log("Unlucky score:", unlucky);
var keyNames = "WASDwasd";
var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.length));
console.log("keyName:", keyName);
console.log("keyName:", keyName); 
switch (keyName.toLowerCase()){
  case "a":
    console.log("move left"); //This block will execute when break; // keyName is a
   case "d":
    console.log("move right");//This block will execute when break; // keyName is d
   case "w":
    console.log("move up");//This block will execute when break; // keyName is w
   case "s":
    console.log("move down");//This block will execute when break; // keyName is s
    
   }
   for(var i = 1; i<= 5; i++){
    console.log(i);
   }
   console.log("end of for");
   do{
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log("Die 1:", die1, "Die 2:", die2);
   }while(die1 != die2);
   console.log("End of do while");
   let iterations = 0;
do{
 iterations++;
 var die1 = Math.floor(Math.random() * 6) + 1;
 var die2 = Math.floor(Math.random() * 6) + 1;
 console.log("Die 1:", die1, "Die 2:", die2);
}while(die1 != die2);
console.log("The matched value is: ", die1);
console.log("Number of iterations: ", iterations);
console.log("end of second do while");
while (iterations <10){
 console.log("iterations:", iterations);
 iterations ++;

}
console.log("end of while");
let die;
while (iterations <10){
 die = Math.floor(Math.random() * 6) + 1;
 if (die % 2 == 0){
  break;
 }
 iterations ++;
}
console.log("Number of iterations: ", iterations + 1);
console.log("Die value: ", die);
for (let name in location) {
  console.log(name);
 };
 for (let name in location) {
  console.log(name, ":", location[name]);
 };
 var stopWatch = {
  elapsedTime: 0,
  resultsHistory: [],
  isTiming: true,
  isPaused: true,
  start: function(){console.log("start");},
  pause: function(){console.log("pause");},
  resume: function(){console.log("resume");},
  stop: function(){console.log("stop");}
 };
 for (let name of stopWatch) {
  console.log(name, ":", stopWatch[name]);
 };