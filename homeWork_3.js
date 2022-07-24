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
let words = phrase.split(' ')

words[0] = words[0].substring(0, 1).toUpperCase() + words[0].substring(1).toLowerCase()
words[1] = words[1].substring(0, 1).toUpperCase() + words[1].substring(1).toLowerCase()
words[2] = words[2].substring(0, 1).toUpperCase() + words[2].substring(1).toLowerCase()
words[3] = words[3].substring(0, 1).toUpperCase() + words[3].substring(1).toLowerCase()

let wholePhrase = words.join(' ')
console.log(`whole 4-word pharse converted to Titalcase -> ${wholePhrase}`);

/**
  * Q4:
  * Create abbreviation for any 4-word sentence
  */
let phrase2 = "do what you love"

let phraseTwo = phrase2.split(' ')
phraseTwo[0] = phraseTwo[0].substring(0, 1).toUpperCase()
phraseTwo[1] = phraseTwo[1].substring(0, 1).toUpperCase()
phraseTwo[2] = phraseTwo[2].substring(0, 1).toUpperCase()
phraseTwo[3] = phraseTwo[3].substring(0, 1).toUpperCase()
let wholePhrase2 = phraseTwo.join('')
console.log(`Abbreviation for the phrase "${phrase2}" is -> ${wholePhrase2}`);