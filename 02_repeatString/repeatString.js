const repeatString = function(string, num) {
    repeat = '';
    if(num >= 0) {
        for (let i = 0; i < num; i++){
            repeat += string;
        }
    } else {
        repeat = "ERROR";
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
