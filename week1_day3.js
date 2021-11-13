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


