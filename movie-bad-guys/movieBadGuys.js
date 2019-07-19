//Lightning Exercise on 07/19/2019

const movieBadGuys = ["Johnny Lawrence", "The Joker", "Freddy Krueger", "Lord Voldemort", "Darth Vader", "Palpatine", "Bane", "Jigsaw", "Doctor Evil", "The Blob", "Cujo", "Jabba the Hutt", "Ivan Drago", "Biff Tannen", "Professor Severus Snape", "Johnny Ringo", "Beetlejuice"]

// TODO: Iterate the above array of movie villains and for each character with names less than 12 characters, log their name to the console

// movieBadGuys.forEach(character => {
//     if (character.length < 12) {
//         console.log(character)
//     }
// })

// TODO: Iterate the array of movie villains and for each character with names less than 12 characters AND contain more than one word, log their name to the console

// movieBadGuys.forEach(character => {
//     if (character.length < 12 && character.includes(" ")) {
//         console.log(character)
//     }
// })

// TODO: Iterate the array of movie villains and for each character with names greater than 8 characters AND DO NOT contain more than one word, push their name into a new array and log that new array in the console.

const theNewBadGuys = []

movieBadGuys.forEach(character => {
    if (character.length > 8 && character.includes(" ") === false) {
        theNewBadGuys.push(character)
    }
})

console.log(theNewBadGuys)

// Another example
// const theNewBadGuys = []

// movieBadGuys.forEach(character => {
//     if (character.length > 8 && !character.includes(" ")) {
//         theNewBadGuys.push(character)
//     }
// })

// console.log(theNewBadGuys)