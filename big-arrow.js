const add = (num1, num2) => num1 + num2;
const sum = add(22, 44)

const multiply = (num1, num2, num3) => num1 * num2 * num3
const result = multiply(2, 4, 6)

const tenTimes = (num) => num * 10
const output = tenTimes(15)

const fiveTimes = (num) => num * 5
const value = fiveTimes(15)

const getName = () => 'brandon sam'
const name = getName()

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(12, 3)

console.log(total)
