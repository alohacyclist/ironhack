//ONLY USE THE .map() METHOD FOR THIS EXERCISE
// SYNTAX FOR A map method
/*
let yourMappedArray = yourArray.map((yourElem, index) => {
   return //something
})
*/
//-------------------------------------------------------
//exercise 1: Capitalize each element of the array - the whole word:

const fruits = ['pineapple', 'orange', 'mango'];
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(uppercaseFruits)  //Answer should be  ['PINEALLPLE', 'ORANGE', 'MANGO'];

//-------------------------------------------------------
//Try writing the map yourself now

//exercise 2: Capitalize the first letter of every city.

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city']
let upperCaseCities = cities.map(capitalize => capitalize[0].toUpperCase() + capitalize.substring(1));
console.log(upperCaseCities)

//Answer should be
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam', 'Berlin', 'Sao paulo', 'Lisbon', 'Mexico city', 'Paris' ]
//-------------------------------------------------------
// Lets try and use functions now

// exercise  3: Return only the names of the restaurants
// Note: Be careful here. Info is an object with a key called 'cities' which is an array

const Info = {
    cities : [
      {name: 'Mirazur', owner : 'Gustavo'},
      {name: 'Noma', owner : 'Jorge'},
      {name: 'Gaggan', owner : 'Alvaro'},
      {name: 'Geranium', owner : 'Gustavo'},
      {name: 'Arpège', owner : 'Luis'},
   ]
}

const findRestaurants = someArr => someArr.map(restaurant => restaurant.name)

let allRestaurants = findRestaurants(Info.cities)
console.log(allRestaurants)

// map student grades

const students = [
   {
     name: 'Tony Parker',
     firstProject: 80,
     secondProject: 75,
     finalExam: 90
   },
   {
     name: 'Marc Barchini',
     firstProject: 84,
     secondProject: 65,
     finalExam: 65
   },
   {
     name: 'Claudia Lopez',
     firstProject: 45,
     secondProject: 95,
     finalExam: 99
   },
   {
     name: 'Alvaro Briattore',
     firstProject: 82,
     secondProject: 92,
     finalExam: 70
   },
   {
     name: 'Isabel Ortega',
     firstProject: 90,
     secondProject: 32,
     finalExam: 85
   },
   {
     name: 'Francisco Martinez',
     firstProject: 90,
     secondProject: 55,
     finalExam: 78
   },
   {
     name: 'Jorge Carrillo',
     firstProject: 83,
     secondProject: 77,
     finalExam: 90
   },
   {
     name: 'Miguel López',
     firstProject: 80,
     secondProject: 75,
     finalExam: 75
   },
   {
     name: 'Carolina Perez',
     firstProject: 85,
     secondProject: 72,
     finalExam: 67
   },
   {
     name: 'Ruben Pardo',
     firstProject: 89,
     secondProject: 72,
     finalExam: 65
   }
 ];

 const finalGrade = arr => arr.map(theStudent => {                                                                           // function with name arr. map method is applied to the array given. current value is represented by theStudent
   const grade = ((((theStudent.firstProject + theStudent.secondProject) * 0.2) + (theStudent.finalExam * 0.6))).toFixed(1); // formula for the avg grade is stored in const grade
   return {                                                                                                                  // the object {} to be returned with properties Name: and Grade:
      Name: theStudent.name,                                                                                                 // Name property receives each name element of the array that is passed to it, here represented by theStudent
      Grade: grade                                                                                                           // result of grade formula is passed on to the name property in the object
   }
  }) 
 
 console.log(finalGrade(students))                                                                                            


