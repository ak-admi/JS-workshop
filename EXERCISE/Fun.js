function curry(prim, fun){
    if(typeof fun != "function") return;
    var ret= function(){
        return fun(prim);
    };
    return ret;
}

var fun=function(val){ return val+50};
var curry1=curry(99,fun);
console.log(curry1());
var curry2=curry("Bob", fun);
console.log(curry2());



var curry=function(fun){
    if (typeof fun!="function") return;
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    var ret=function(){
        var nested_args= Array.prototype.slice.call(arguments);
        return fun.apply(this, args.concat(nested_args));

    }
    return ret;
}

var fun= function () {return arguments.length;
    
};
var cur1=curry(fun,1,2,3);
console.log(cur1(4,5,6));
