const reverseString = function(word) {
    let answer = "";
    for ( let i = word.length -1; i > -1; i--){
        answer += word[i];
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;

console.log( reverseString("hello world!"));