let balance = 1240;
balance = 1340;

const userName = 'jaan pakhi potas potas';
const weTogether = 'ami' + userName;
console.log(weTogether)
// userName = 'moyna pakhi' not allowed

const numbers = [23, 54, 23, 67, 77, 56, 37, 85, 46]
// numbers = [24,56,254,]  not allowed
numbers.push(666);
numbers[1] = 333

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    sum = sum + number;
}

const student = {
    roll: 33,
    name: 'mofij',
    job: 'intern'
}
student.name = 'mofajjol'

// student ={name:'mofajjol'} not allowed

