// function declaration
function add(num1, num2) {
    return num1 + num2
}
//function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
//function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}
//arrow function
const add4 = (num1, num2) => num1 + num2

const sum1 = add(22, 67)
const sum2 = add2(23, 54)
const sum3 = add3(23, 42)
const sum4 = add4(23, 45)
console.log(sum2, sum1, sum3, sum4)