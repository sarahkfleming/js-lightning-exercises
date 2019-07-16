// Console.log the GOT characters that died using a function.
// -hint you will need a for loop or a foreach.

const got = ["Theon Greyjoy", "The Night King", "Varys", "Jaime Lannister", "Cersei Lannister", "Jon Snow"]

// Array in the first line below is argument
const isNotAlive = (array) => {
    array.forEach(player => {
        if (player !== "Jon Snow") {
            console.log(player)
        }
    })
}

// GoT below is a parameter
isNotAlive(got);