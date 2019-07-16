// 1. Create a function that logs the result of adding two numbers
const addFunction = (num1, num2) => console.log('addFunction', num1 + num2)

addFunction(44, 10000)

//1b. Create a function that logs the result of multiplying two numbers
const multFunction = (num1, num2) => console.log('multFunction',num1 * num2)

multFunction(7, 43)

//2. Create a function called "calculate" that takes three arguments: two numbers and a function
//Execute the second function and make it output 34
const calculate = (num1, num2, funky) => {
    funky(num1, num2)
}

calculate(17, 17, addFunction)
calculate(17, 17, multFunction)