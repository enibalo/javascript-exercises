const leapYears = function(year) {
    let answer = (year % 4 == 0)?true: false;
    if (answer == true && year % 400 != 0 && year % 100 == 0){
        answer = false;
    }
    return answer;
};

// Do not edit below this line
module.exports = leapYears;
