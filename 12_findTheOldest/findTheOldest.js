const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
    yearOfDeath: 1970
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(people) {  
    const oldestPerson = people.reduce((acc, person) =>{             
        if(person.yearOfDeath === undefined) {
           const date = new Date();
           person.yearOfDeath = date.getFullYear();           
        }       
        return (person.yearOfDeath - person.yearOfBirth) > (acc.yearOfDeath - acc.yearOfBirth) ? person : acc;         
    }, people[0]);
  return oldestPerson;      
};

// Note: that this code passes all the tests.
// See also under solution alternative coding of the function.
// That function uses a helper function to calculate the age
// of the current person, and also the accumulator person age
// for comparison. This simplifys the findTheOldest by using the 
// helper function. Though my code does pass all tests!!

// Do not edit below this line
module.exports = findTheOldest;
