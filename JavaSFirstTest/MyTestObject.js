const TestFunctions = require('./TestFunctions');

const testObject = new TestFunctions();
let array1 = testObject.removeValue([21, 32, 12, 43, 45, 65, 12], 45)
let array2 = testObject.removeValue([-1, 2, 43, 65], 2)
console.log(array1);
console.log(array2);
console.log('\n')

let driver1 = testObject.dmvPointSystem(60, 63)
let driver2 = testObject.dmvPointSystem(75, 70)
let driver3 = testObject.dmvPointSystem(60, 75)
console.log(driver1);
console.log(driver2);
console.log(driver3);
console.log('\n')

let missingNumber1 = testObject.missingNumber([1, 2, 3, 4, 5])
let missingNumber2 = testObject.missingNumber([2, 3, 1, 56, 23, 11])
let missingNumber3 = testObject.missingNumber([-1, 0, 2, 1])

console.log(missingNumber1)
console.log(missingNumber2)
console.log(missingNumber3)