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

const power = function() {
	
};

const factorial = function() {
	
};

// test functions with values
//console.log(' product = ', multiply([1, 2, 3, 4]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
