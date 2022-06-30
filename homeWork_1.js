//T(°C) = (T(°F) - 32) × 5/9
//T(K) = (T(°F) + 459.67)× 5/9

//T(°F) = T(°C) × 9/5 + 32
//T(K) = T(°C) + 273.15

// T(°F) = T(K) × 9/5 - 459.67
// T(°C) = T(K) - 273.15

let fTemp1 = 73
let cTemp1 = (fTemp1 - 32) * 5/9
console.log (`\n${fTemp1}°F is equal to ${cTemp1}°C`)
let kTemp1 = (fTemp1 + 459.67) * 5/9
console.log (`\n${fTemp1}°F is equal to ${kTemp1}°K`)

let cTemp2 = 32
let fTemp2 = cTemp2 * 9/5 + 32
console.log(`\n${cTemp2}°C is equal to ${fTemp2}°F`)
let kTemp2 = cTemp2 + 273.15
console.log (`\n${cTemp2}°C is equal to ${kTemp2}°K`)

let kTemp3 = 298
let fTemp3 = kTemp3 * 9/5 - 459.67
console.log (`\n${kTemp3}°K is equal to ${fTemp3}°F`)
let cTemp3 = kTemp3 - 273.15
console.log(`\n${kTemp3}°K is equal to ${cTemp3}°C`)