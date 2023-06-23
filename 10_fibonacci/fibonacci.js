const fibonacci = function(index) {
    if (index <= 0){
        return "OOPS";
    } 
    let answer = 1;
    let prev_answer = 1;
    let prev2_answer = 0;
    for (let i = 1; i < index; i++){
        answer = prev2_answer + prev_answer;
        prev2_answer = prev_answer;
        prev_answer = answer;
    }
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
console.log("i");
console.log(fibonacci(-1));
