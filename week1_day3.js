//  ARRAYS

let myArray = ['banana', 'orange', 33, true, null, undefined]

console.log(myArray[2]) // 33
console.log(myArray[0]) // 'banana'

myArray.push('Christian') // add an element to the array
console.log(myArray) // 'banana', 'orange', 33, true, null, undefined, 'Christian'

myArray.unshift('100') // add something to the beginning of the array
console.log(myArray) // '100', 'banana', 'orange', 33, true, null, undefined, 'Christian'

myArray.pop() // deletes the last element of the array
myArray.shift() // first element is being deleted
myArray.splice(1, 3, 'replace Item') // splice receives 3 arguments and deletes a number of elements starting from a given position .splice(index, number of elements to be deleted, items you want to replace)

console.log(myArray)

// FOR LOOP

for (let i = 0; i < 4; i++) {
    console.log('Hello')
}

// logs 'Hello' 4 times

myArray.length // gives the length of an array

// FOR OF LOOP

for (let element of myArray) {
    console.log(element)
}

// logs each element of the arrays

// FOR EACH METHOD

function elements (element) {
    console.log(element)
}
myArray.forEach(elements) // calls the elements function and executes the function for each element on the array (here logging each element)

function addThree(number) {
    console.log(number + 3)
}

let myNumbers = [10, 20, 30, 100]
myNumbers.forEach(addThree) // calls the addThree function and executes it on each item in the array (here: adding 3 to each number in myNumbers) [13, 23, 33, 103]


// SPLIT METHOD

let myString = 'Alohacyclist'
myString.split() // split converts a string into an array

console.log(myString)

myString.split('')
console.log(myString) // ['A','l','o','h','a','c','y','c','l','i','s','t']

let mySentence = 'Nothing truly great ever came from a comfort zone.'
console.log(mySentence.split(' ')) // ['Nothing', 'truly', 'great', 'ever', 'came', 'from', 'a', 'comfort', 'zone','.']

console.log(mySentence.split('r')) // removes each r in the array 


// FUNCTIONS

// ES5 STYLE FUNCTION:

function add(a , b) {
    const result = a + b
    return result
}

console.log(add(3, 100)) // 103


// ES6 STYLE FUNCTION:

const substract = (a, b) => {   // ARROW FUNCTION
    const result2 = a - b
    return result2
} 

console.log(substract(33, 11)) // 22


// SORTING NUMBERS ??? something wrong here!!!!!!!!!!!
const sort = (array) => {
    let resultArray = [...array]
    for (let j = 0; j < resultArray.length; j++) {
        for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i] < resultArray[i + 1]) {
                let arrayCopy = [...resultArray]
                resultArray = arrayCopy[i + 1]
                resultArray[i + 1] = arrayCopy[i]
            }
        }
    }
    return resultArray
}
console.log(sort(myNumbers))

// FINISH THIS FUNCTION FROM LAB1:

//const whoGoesFirst (driver, navigator)


// objects

let person1 = {
    name: 'Christian',
    age: 34,
    jobs: ['dev', 'teacher'],
    height: 1.81,
    married: false
}

let person2 = {
    name: 'Dieter',
    age: 67,
    jobs: ['retired'],
    married: true,
    teammates: [person1]
}

let person3 = {
    name: 'Pia',
    age: 27,
    jobs: ['designer', 'dev', 'baker'],
    married: 'divorced',
    teammates: [person1, person2]
}

console.log(person1.name) // logs name of person1

console.log(person2.teammates[0].jobs[1]) // this is dot notation
console.log(person3['teammates'][0]['jobs'][1]) //  bracket notation

person1.teammates = [] // add something to an existing object
person1.teammates.push(person3) // adds person3 to person1 teammates

person1.teammates = [person2]
console.log(person1.teammates[0].name) // logs name of person1 teammate, which is person2 (Dieter)

delete person3.age
console.log(person3)

person3.hobbies = ['programming', 'soccer']
console.log(`${person3.name} likes ${person3.hobbies[1]} and ${person3.hobbies[0]}.`)


