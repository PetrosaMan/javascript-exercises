const repeatString = function(string, times) {
    if(times < 0) {
        return 'ERROR';
    }  

    let result = '';
    for(let j = 0; j < times; j++) {
        result += string;
    } 
    return result;   
};


// Do not edit below this line
module.exports = repeatString;
