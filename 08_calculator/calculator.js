const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
  if(array.length === 0) {
    return 0;
  }

  let sumOfElements = 0;
	for(let i = 0; i < array.length; i++) {
      sumOfElements += array[i];
  }
  return sumOfElements;
};

const multiply = function(array) {
    let product = 1; 
    if(array.length < 2) { return 'ERROR'}

    for(let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
  };

const power = function(number, exponent) {
	 let result = 1;
   for(let j = 1; j <= exponent; j++) {
    result = result *= number;
   }

   return result;
};


const factorial = function(number) {
  let n_factorial = 1;
  if(number === 0) return n_factorial;  // 0! = 1
  
  let count = number;
  while( count > 0) {
    n_factorial *= count;
    count--;
  }
  return n_factorial;	
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
