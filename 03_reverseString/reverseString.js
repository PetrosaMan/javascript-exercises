const reverseString = function(string) {    
    let result = "";
    for(let i = string.length - 1; i >= 0; i--) {         
        result += string[i];
    }                
    return result;
};

// solution code:
// return string.split("").reverse().join("");
// run tests:
// npm test reverseString.spec.js

// Do not edit below this line
module.exports = reverseString;

