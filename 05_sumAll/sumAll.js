const sumAll = function(num1, num2) {
    let total = 0;
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (num1 > num2){
        for (let i = num2; i <= num1; i++){
            total = total + i;
        }
    }
    else{
        for ( let i = num1; i <= num2; i++){
            total = total + i;
        }
    }
   return total;
};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll(1,"10"));

