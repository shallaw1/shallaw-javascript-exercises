const sumAll = function(num1, num2) {
    // We need to define the max value bwtween the two parameters.
    maxValue = Math.max(num1, num2);
    let sumAllNum=0;

    // negative integers we could not be accespted.
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    
    // we add between both input if and only if both are integer
    }else if (Number.isInteger(num1) && Number.isInteger(num2)) {
        for(i=1; i <= maxValue; i++){
            sumAllNum += i;
        }
    } else {
        return "ERROR";
    }
    return sumAllNum;
};

// Do not edit below this line
module.exports = sumAll;
