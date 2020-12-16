function isElgible(distance,membershipstatus){
    if (distance < 1 || membershipstatus === "active" && distance > 10 || membershipstatus === "inactive" && distance > 5 ) {
        return false;
    }
    return true;
  }
console.log(isElgible(0.5,"active"));
console.log(isElgible(7,"inactive"));