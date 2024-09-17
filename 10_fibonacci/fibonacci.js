function fibonacci(fn) {
  // fn = f(n-1) + f(n-2)
  let a = 0;   
  let b = 1;   

  if (fn < 0) {
    return 'OOPS'
  }
  if (fn == 0) {
    return 0;
  }

  for (let i = 2; i <= fn; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Do not edit below this line
module.exports = fibonacci;
