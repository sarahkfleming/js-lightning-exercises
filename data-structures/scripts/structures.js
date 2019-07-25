// 07/25/2019 - Take the data below and represent it as each of these data structures.

// 1. A string
// 2. An object
// 3. An array

// "lunch"
// "peanut butter and jelly"
// "whole wheat"
// "grape juice"
// "apple"

// const lunch = "peanut butter and jelly sandwich on whole wheat with grape juice and an apple"

// const lunch = {
//     sandwich: "peanut butter and jelly",
//     bread: "whole wheat",
//     drink: "grape juice",
//     sideItem: "apple"
// }

// const lunch = ["peanut butter and jelly", "whole wheat", "grape juice", "apple"]

// Stretch goal: Try out a relatively new feature of JavaScript called a Set(). Add each of those strings to a Set and then console.log() the Set. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const lunchSet = new Set()
lunchSet.add("peanut butter and jelly")
lunchSet.add("whole wheat")
lunchSet.add("grape juice")
lunchSet.add("apple")

console.log(lunchSet)