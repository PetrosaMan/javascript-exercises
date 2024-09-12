const removeFromArray = function (array, ...elementsToRemove) {
  return array.filter(function (element) {
    return !elementsToRemove.includes(element);
  });
};


/* Alternative solution using forEach with callback function
  function removeFromArray(array, ...itemsToRemove) {
    let arr = [];
    array.forEach(removeItems);
    return arr;
  
    function removeItems(value) {
      if(!itemsToRemove.includes(value)) {
        arr.push(value);
      }
    }
  } 
  */   

// Do not edit below this line
module.exports = removeFromArray;
