/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 */
let countryName = 'Belarus';
let countryNameCharactersCount = countryName.split('').length
console.log(`Number of characters in country name ${countryName} -> ${countryNameCharactersCount}`)

 /**
  * Q2:
  * Count the number of words in the sentence
  */
let sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let wordCount = sentence.split(' ').length
console.log(`Number of words in the sentence is -> ${wordCount}`);
/**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  */
let phrase = "don't worry be happy"
let firstLetter = phrase.substring(0,1).toUpperCase()
let firstWord = phrase.substring(1, 6)
let secondLetter = phrase.substring(6, 7).toUpperCase()
let secondWord = phrase.substring(7, 12)
let thirdLettert= phrase.substring(12, 13).toUpperCase()
let thirdWord = phrase.substring(13, 15)
let fourthLetter = phrase.substring(15, 16).toUpperCase()
let fourthWord = phrase.substring(16)
let wholePhrase = firstLetter.concat(firstWord, secondLetter, secondWord, thirdLettert, thirdWord,fourthLetter,fourthWord)
console.log(`whole 4-word pharse converted to Titalcase -> ${wholePhrase}`);

/**
  * Q4:
  * Create abbreviation for any 4-word sentence
  */
let phrase2 = "do what you love"
let firstChar = phrase2.substring(0, 1)
let secondChar = phrase2.substring(3, 4)
let thirdChar = phrase2.substring(8, 9)
let fourthChar = phrase2.substring(12, 13)
let abbreviation = firstChar.concat(secondChar, thirdChar, fourthChar).toUpperCase()
console.log(`Abbreviation for the phrase "${phrase2}" is -> ${abbreviation}`);