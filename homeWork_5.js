// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */


const phrase = 'YOu lIVe ONlY ONcE'
let phraseArray = phrase.toLowerCase().split(' ')
let phraseTitleCase =''


for (let i = 0 ; i < phraseArray.length; i++) {
    let capitalLettter = phraseArray[i].substring(0, 1).toUpperCase() + phraseArray[i].substring(1)

    if (i === phraseArray.length-1) {
        phraseTitleCase = phraseTitleCase + capitalLettter   
    } else {
        phraseTitleCase = phraseTitleCase + capitalLettter + ' '
    }   
}

console.log(`\nsentence to Title case -> ${phraseTitleCase}`);


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
const sentence = 'Learn'
let sentenceArray = sentence.split(' ').reverse()
let sentenceReverse = ''
for (let index = 0; index < sentenceArray.length; index++) {
    sentenceReverse = sentenceReverse + sentenceArray[index] + ' '

}
console.log(`\n Sentence in reverse order -> ${sentenceReverse}`)
/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 let numbers = [1, 2, 3, 4, 5]
 let numbersTotal = 0
 let index = 0
 while (index < numbers.length) {
    numbersTotal = numbersTotal + numbers[index]
    index++
 }
 console.log(`\nSum of all numbers in Array -> ${numbersTotal}`);

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 let numbersArray = [1, 2, 3, 4, 5]
 let numbersTotal1 = 0
 let i = 0
 while (i < numbersArray.length) {
    numbersTotal1 = numbersTotal1 + numbersArray[i]
    i++
 } 
 let Average = numbersTotal1 / numbersArray.length
 
 console.log(`\nAverage of all numbers in Array -> ${Average}`);