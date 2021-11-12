const hacker1 = "Elon Musk"

console.log(`The driver's name is ${hacker1}.`);


const hacker2 = "Jeff Bezos"

console.log(`The navigator's name is ${hacker2}.`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// driver's name in capital letters with spaces
let spaced = []
for(let i = 0; i < hacker1.length; i++) {
   spaced.push(hacker1[i].toUpperCase())
}
let spacedName = ""
for(i = 0; i < spaced.length; i++) {
  spacedName += spaced[i] += " "
}
console.log(spacedName)

// navigator's name reversed
let reversed = []
for(let i = hacker2.length - 1; i >= 0; i--) {
    reversed.push(hacker2[i])
}

let reversedName = ""
for (i = 0; i < reversed.length; i++) {
    reversedName += reversed[i]
}
console.log(reversedName)

let hacker1Chars = []
let hacker2Chars = []
for (let i = 0; i < hacker1.length && hacker2.length; i++) {
    hacker1Chars.push(hacker1[i])
    hacker2Chars.push(hacker2[i])
}

for (let i = 0; i < hacker1Chars.length && hacker2Chars.length; i++) {
    if (hacker1Chars[i] < hacker2Chars[i]) {
        console.log("The driver's name goes first.")
      break;
    } else if (hacker1Chars[i] > hacker2Chars[i]) {
        console.log("Yo, the navigator goes first definitely.")
      break;
    } else {
        console.log("What?! You both have the same name?")
      break;
    }
}

// bonus 1
// lorem ipsum

const myParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra tortor ac ipsum tincidunt, vitae auctor urna porta. Maecenas vulputate justo eu neque elementum tempor. Aenean at est at dolor ultrices malesuada ut id enim. Praesent in semper diam. Vestibulum molestie at quam vitae lacinia. Donec viverra varius felis, eget fringilla diam fringilla eu. Mauris lacinia dapibus ultricies. Sed in feugiat turpis. Donec mi tellus, accumsan vel leo vitae, viverra aliquet magna. Nulla dignissim, diam ac facilisis suscipit, erat est laoreet diam, vel dapibus diam nulla vitae leo. Nunc dignissim metus nec lacus placerat pellentesque. Donec varius a mauris eget pulvinar. 
Quisque cursus venenatis ex, id vehicula sem ultrices a. Maecenas ullamcorper tellus magna, ac sagittis nisi viverra ut. Duis accumsan pellentesque tortor et dictum. In non augue lobortis, finibus risus vel, gravida mauris. Cras interdum mattis ligula, in mollis mauris malesuada et. Quisque justo magna, consequat a nulla quis, ullamcorper pharetra risus. Cras ligula tellus, accumsan viverra lorem vitae, ullamcorper hendrerit sem. Proin lacinia viverra bibendum. Praesent eget magna in sapien maximus auctor. Ut sagittis sodales tellus, non laoreet augue porttitor nec. Vivamus condimentum id orci sed fermentum. 
Nulla lectus mi, luctus ut consequat ultricies, hendrerit interdum ligula. Aenean interdum non nunc eget pharetra. Sed eu semper elit. Vestibulum augue magna, sagittis a dui vitae, porta egestas odio. Pellentesque et tincidunt ex. Pellentesque non elit eget libero placerat feugiat et vitae augue. Phasellus libero sem, cursus et turpis sed, ullamcorper condimentum risus. Aliquam ornare neque at orci varius, vitae condimentum arcu vulputate. Nullam finibus leo eu risus mollis tincidunt. Nullam finibus mollis lectus sit amet iaculis. Sed nec ullamcorper arcu. Curabitur ut massa libero. Etiam ac massa consectetur, rutrum nibh at, rhoncus mauris. Fusce vitae nisi sed lorem egestas ornare.`

let wordCount = 0
let etCount = 0

for (let i = 0; i < myParagraph.length + 1; i++) {
    if (myParagraph[i] === " "){
        wordCount++
    }
}
console.log(wordCount + 1) // add 1 to account for the very last word in the text which is not followed by a space

// bonus 2
// palindrome

// Since I could only think of methods for this one, and I could not get to work my loops, here is my pseudo code:
// 1. phraseToCheck.toUpperCase(), then remove all spaces and special characters from original phrase and store as string in new variable (let myPhrase = "")
// 2. iterate over the new variable (myPhrase) in reverse and store as string in new variable (myPhraseReverse = "")
// 3. check myPhraseReverse[i] against myPhrase[i] 
// 4. If true, it is a palindrome, else it is not.