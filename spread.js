const numbers = [22, 54, 66, 46, 75]
// console.log(numbers)
// console.log(...numbers)

const max = Math.max(22, 43, 63)
const maxInArray = Math.max(...numbers)
// console.log(max, maxInArray)

const numbers2 = [34, ...numbers, 25, 46];
numbers.push(98)
console.log(numbers)
console.log(numbers2)