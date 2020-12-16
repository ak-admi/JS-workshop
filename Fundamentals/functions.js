function getDiceRollValue(){
    return Math.floor(Math.random() * 6) + 1;
  }
  var rollValue = getDiceRollValue() + getDiceRollValue();
  console.log(""+rollValue);
  
function getDiceRoll(numberOfDice){
    var rollValue = 0;
    for (let i = 1; i<= numberOfDice; i++){
     rollValue += Math.floor(Math.random() * 6) + 1;
    }
    return rollValue;
   }
   var rollValue = getDiceRollValue(2);
   console.log(""+rollValue);

var getDiceValue = ()=> Math.floor(Math.random() * 6) + 1;
   var rollValue = getDiceValue() + getDiceValue();
   console.log(""+rollValue);

var getDiceRoll = (numberOfDice) => {
    numberOfDice = (isNaN(parseInt(numberOfDice)) || numberOfDice< 1) ?1 :numberOfDice;
    var rollValue = 0;
    for (let i = 1; i<= numberOfDice; i++){
     rollValue += Math.floor(Math.random() * 6) + 1;
    }
    return rollValue;
   }
   var rollValue = getDiceRoll(2);
   console.log(""+rollValue);
   
