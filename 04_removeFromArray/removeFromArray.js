const removeFromArray = function(array) {
    let elements = Array.from(arguments);
    let list = elements.slice(1);
    function getStrippedArray(element){
        let answer = (list.indexOf(element) == -1)?true:false;
        return answer;
    }
    return array.filter(getStrippedArray);
};

// Do not edit below this line
module.exports = removeFromArray;


console.log(removeFromArray([1,2,3,4], 2, "hi"))