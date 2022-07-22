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
function capitalization(phrase) {
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
    return phraseTitleCase   
} 
 console.log(capitalization('have a great day'));
 console.log(capitalization('YOu lIVe ONlY ONcE'));
 console.log(capitalization('gooD mORNIng'));
 console.log(capitalization('apple banana cherry'));
 console.log(`\n`);

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
function sentenceRiverse(sentence) {
    let sentenceArray = sentence.split(' ').reverse()
    let sentenceReverse = ''
    for (let index = 0; index < sentenceArray.length; index++) {
        sentenceReverse = sentenceReverse + sentenceArray[index] + ' '
    }   
    return sentenceReverse
}
 console.log(sentenceRiverse('have a great day'))
 console.log(sentenceRiverse('good morning'))
 console.log(sentenceRiverse('hello dear how are you doing'))
 console.log(sentenceRiverse('Learn'))
 console.log(`\n`);


 /**
  * Q3:
  * Find the total of numbers in the array
  * 
  * [1, 2, 3, 4, 5] -> 15
  * [1, 1, 1, 2, 3, 1, 2] -> 11
  * [1, -1] -> 0
  */
 
function calculateTotal(numbers) {
    let numbersTotal = 0
    let index = 0
    while (index < numbers.length) {
       numbersTotal = numbersTotal + numbers[index]
       index++
    }
    return numbersTotal 
}
 console.log(calculateTotal([1, 2, 3, 4, 5]));
 console.log(calculateTotal([1, 1, 1, 2, 3, 1, 2]));
 console.log(calculateTotal([1, -1]));
 console.log(`\n`);

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
 
 function numberAverage(numbersArray) {
    let numbersTotal1 = 0
  let i = 0
  while (i < numbersArray.length) {
     numbersTotal1 = numbersTotal1 + numbersArray[i]
     i++
  } 
  let average = numbersTotal1 / numbersArray.length
  return average
 }

  console.log(numberAverage([1, 2, 3, 4, 5]));
  console.log(numberAverage([1, 1, 1, 2, 3, 1, 2]));
  console.log(numberAverage([1, -1]));