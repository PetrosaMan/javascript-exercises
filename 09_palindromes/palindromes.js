const palindromes = function (string) { 
  // Use a regex to filter out non alpha-numeric chars
  const filteredString = string.replaceAll(/[^A-Za-z0-9]+/g,'').toLowerCase();    
  const reversedString = [...filteredString].reverse().join('');
  // return true if is palindrome else false
  return (filteredString === reversedString); 
};

// Do not edit below this line
module.exports = palindromes;
