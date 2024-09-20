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
        console.log(person); 
    }, people[0]);
  return oldestPerson;      
};

//console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
