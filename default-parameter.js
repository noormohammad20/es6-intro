function add(num1, num2 = 0) {
    // option 2
    // num2 = num2 || 0;
    // option 1 
    // if (num2 == undefined) {
    //     num2 = 0
    // }
    const total = num1 + num2
    return total;
}
const result = add(22, 22)
console.log(result)