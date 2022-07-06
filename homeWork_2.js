let sentence1 = 'Hello dear, how are you doing?'
let result1 = sentence1.length >= 10 ? 15 : 25
console.log(`\nresult1 -> ${result1}`);

let sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL."
let sentence2_Alpha = sentence2.replace(/a/gi, `Alpha`)
console.log(`\nsentence2_Alpha -> ${sentence2_Alpha}`)

let sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

// 1. the length of sentence-3
let sentence3_lenght = sentence3.length
console.log(`\nsentence3_length -> ${sentence3_lenght}`)

//2. does sentence-3 starts with 'health' (ignore cases)
let sentence3_LowerCase = sentence3.toLowerCase()
let sentence3_StartsWith = sentence3_LowerCase.startsWith('health')
console.log(`\nDoes sentence3 starts with 'health' -> ${sentence3_StartsWith}`);

//3. does sentence-3 contains with 'Body' (ignore cases)
let sentence3_Replace = sentence3_LowerCase.replace(/b/g, 'B')
let sentence3_Contains = sentence3_Replace.includes('Body')
console.log(`\nDoes sentence3 contains word 'Body' -> ${sentence3_Contains}`);

// 4. index of 'Body' in sentence3  (ignore cases)
let sentence3_IndexOfBody = sentence3_Replace.indexOf('Body')
console.log(`\nindex of word 'Body' -> ${sentence3_IndexOfBody}`);

// 5. the last-character in sentence-3
let sentence3_IndexOfLastOccurance = sentence3.lastIndexOf('.')
console.log(`\nindex of last character in string -> ${sentence3_IndexOfLastOccurance}`)
//Because we already know index of last character is 70
let sentence3_LastCharacter = sentence3.charAt(70)
console.log(`\nlast character in the string is -> ${sentence3_LastCharacter}`)

// 6. word 'Body' is present only once. (true or false)
//we alredy know index of 'Body' is 49, now we fing of last index of body is the same to confirm number occurances

let sentence3_LastIndex = sentence3_Replace.lastIndexOf('Body')
console.log(`\nword body present only once -> ${sentence3_LastIndex}`);
let sentence3_Hello = sentence3_LastIndex === sentence3_IndexOfBody
console.log(`\nword body present only once -> ${sentence3_Hello}`);



//I initially was overthinking and came up with this after google search
let sentance3_HelloOccurances = sentence3_Replace.match(/Body/g)
console.log(`\n\n\nsentence3 contains 'Body' -> ${sentance3_HelloOccurances}`);
let sentance3_HelloOccurancesLength = sentance3_HelloOccurances.length
console.log(`\nsentance3 contains 'Body' -> ${sentance3_HelloOccurances.length}`);
let sentence3WordBody = sentance3_HelloOccurancesLength == 1
console.log(`\nis word 'Body' repeated only once -> ${sentence3WordBody}`);


