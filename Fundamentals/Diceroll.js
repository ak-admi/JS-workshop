function getDiceRoll(rolls){
    rolls=(isNaN (parseInt (rolls))|| rolls < 1) ? 1 : rolls;
    var rollvalue=0;
    for(let i=1;i<=rolls;i++){
        rollvalue+=Math.floor(Math.random()*6)+1;
    }
    console.log(rollvalue);
    alert(`Dice rolled ${rollvalue}`)
    return rollvalue;
}
