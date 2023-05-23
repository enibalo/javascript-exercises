const repeatString = function( word, number ) {
    let answer = '';
    for ( let i = 0; i < number; i++ ){
        answer = answer + word;
    }
    answer = (number < 0)? "ERROR":answer;
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
