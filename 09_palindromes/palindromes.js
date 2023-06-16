const palindromes = function (word) {
    // indIndex() filter()
    let myWord = Array.from(word);
    let arr = myWord.filter(function(element){
        if (element.match(/[a-z]/i)){
            return true;
        }
        return false;
    });
    let arr2 = [...arr];
    return arr.every( function(element){
        if (arr2.at(-1).toUpperCase() == element.toUpperCase()){
            arr2.pop();
            return true;
        }else{
            arr2.pop();
            return false;
        }
    });
}

// Do not edit below this line
module.exports = palindromes;


console.log(palindromes("aa a"));