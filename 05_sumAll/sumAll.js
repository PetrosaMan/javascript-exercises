const sumAll = function (int_1, int_2) {

  if (!Number.isInteger(int_1) || !Number.isInteger(int_2)) return "ERROR";
  
  if (int_1 < 0 || int_2 < 0) {
    return "ERROR";
  }

  let sum = 0;
  let min = int_1;
  let max = int_2;
  
  if (int_1 > int_2) {
    min = int_2;
    max = int_1;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
