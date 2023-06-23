const getTheTitles = function(array) {
    let answer = array.map(function(element){
        return element['title'];
    });
    return answer;
};

// Do not edit below this line
module.exports = getTheTitles;

