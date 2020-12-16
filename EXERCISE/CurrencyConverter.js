function isEligible(distance, membershipstatus){
    if(distance<1|| membershipstatus==="active" && distance>10|| membershipstatus==="inactive"&& distance>5){
        return false;
    }
    return true;


}
console.log(isEligible(.5,"active"));
console.log(isEligible(5,"active"));
console.log(isEligible(2.5,"active"));

