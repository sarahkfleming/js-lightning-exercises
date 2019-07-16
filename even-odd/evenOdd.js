/*
2. Design a function named `evenOrOdd` that take a single number as an argument.
3. It should return the string "Even" if the number is evenly divisible by two.
4. It should return the string "Odd" if the number is not evenly divisible by two.
5. Invoke the function once with an even number argument
6. Invoke the function once with an odd number argument

Use the modulo - or remainder - operator in JavaScript to accomplish this.
*/

const evenOrOdd = (num1) => {
    if (num1 % 2 ===0) {
        return `${num1} is Even`
    }
    return `${num1} is Odd`
}
const result1 = evenOrOdd(44)
console.log(result1)

const result2 = evenOrOdd(39)
console.log(result2)

/*
1. Create an array of numbers. Some even, some odd.
2. Iterate the array using the `forEach()` array method, and invoke the `evenOrOdd` function passing the current number as the argument.
3. Use `console.log` to display the result in the Developer Console.
*/

const numbers = [ 3, 6, 12, 35, 67, 8765, 39495, 223984, 5, 4, 8, 2, 3, 9 ]

numbers.forEach(
    currentNumber => {
    const isItEvenOrOdd = evenOrOdd(currentNumber)
    console.log(isItEvenOrOdd)
    }
)