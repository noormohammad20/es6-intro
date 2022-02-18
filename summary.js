let priyoPerson = 'kulsum begum'
priyoPerson = 'momotaj begum'

const bou = 'priya'

// default parameter
function getName(first, last = 'chowdury') {
    first + '' + last
}

//template string
const myPeople = `my people are ${bou} and his full name is ${getName('maria')}.my name is ${priyoPerson}`
console.log(myPeople)

// arrow function

const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const first = x + y
    const second = y * z
    const third = x / z
    const result = (first + second) * third;
    return result
}

const numbers = [3, 5, 6, 7, 6, 2]
const min = Math.min(...numbers)
console.log(min)