const sumAll = function (int_1, int_2) {
  
  if(int_1 < 0 || int_2 < 0) {    
    return 'ERROR';
  } 
  
  if(int_1 % 1 !== 0 || int_2 % 1 !== 0) {    
    return 'ERROR';
  }
  
  if( typeof int_1 === 'string' || typeof int_2 === 'string') {    
    return 'ERROR';
  }    

  let sum = 0;
  let min = int_1;
  let max = int_2;
    
  if (int_1 > int_2) {
    min = int_2;
    max = int_1;
  }

  for( let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// See solution code for error checking using:
// if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

// Do not edit below this line
module.exports = sumAll;
