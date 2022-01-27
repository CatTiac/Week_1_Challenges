let age = 33
let country = "UK";

if (age < 17) {
    console.log("You aren't old enough.")
}
else if (age > 17 ) {
    console.log("Yes, I can serve you!")
}
else {
    console.log("Something went wrong, please try again")
}

//Challenge 1

let password = "Drowssap123";
let character = password.length;

if (character <= 8) {
    console.log("Your password MUST be more than 8 characters. Please try again.")
}
else {
    console.log(password)
}

//Challenge 2

let num = Math.trunc(Math.random()*100);
console.log(num)

if (num % 3 == 0 || num % 5 == 0) {
    console.log("This number is divisible by 3 or 5")
}
else {
    console.log("This number is NOT divisible by 3 or 5")
}

// Challenge 3

if (num % 3 == 0) {
    console.log("fizz")
}
else if (num % 5 == 0) {
    console.log("buzz")
}
else {  
    console.log("fizz buzz")
}

//Challenge 4 

let num1 = Math.trunc(Math.random()*1000);
console.log(num1)

const str = num1.toString();

const numbers = str.split(' ');
console.log(numbers);

let num2 = str;

let numReverse = num2.split("").reverse().join("");
console.log(numReverse);

if (num2 === numReverse) {
    console.log("Your number is a palindrome");
}
else if (num2 <= 10) {
    console.log("Your number needs to be more than 10");
}
else {
    console.log("Your number is NOT a palindrome");
}

// Challenge 5

let time = ["7", "8", "9"]
let placeOfWork = ["home", "commuting", "at work"]
let townOfHome = "Merseyside"

if (time = "7") {
    console.log(`If the time is ${time[0]} I'm at ${placeOfWork[0]}.`);
}
else if (time = "8") {
    console.log(`If the time is ${time[1]} I'm at ${placeOfWork[1]}.`);
}
else if (time = "9") {
    console.log(`If the time is ${time[2]} I'm at ${placeOfWork[2]}.`);
}

// Challenge 6 last vowel

// "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

const startVowel = (str, vowels = "aeiouAEIOU") => str .split('') .find (c => vowels .includes (c))

const reverseString = (str) => str .split('') .reverse () .join('')

let endVowel = (str) => startVowel (reverseString (str))

console.log(endVowel (y = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`));


	var indexOfLastVowel = Math.max(y.lastIndexOf("a"), y.lastIndexOf("e"), y.lastIndexOf("i"), y.lastIndexOf("o"), y.lastIndexOf("u"));
	return y.charAt(indexOfLastVowel);


//Challenge 7

let word = "supercalifragilisticexpialidocious";
console.log(word);

let firstLetter = (word.charAt(0));
console.log(firstLetter);

let lastLetter = (word.slice(-1));
console.log(lastLetter);

let firstAndLastLetterMatch = (firstLetter == lastLetter);

const checkEndLetters = () => {
    if (firstAndLastLetterMatch) {
        console.log("True - The first and last characters match");
        firstAndLastLetterMatch = false;
    } else {
        console.log("False - The first and last characters DO NOT match");
        firstAndLastLetterMatch = true;
    }
}

    checkEndLetters();

//Challenge 8

let num3 = 10
let num4 = 4

const addUp = (num3, num4) => {
    return num3 + num4;
}

let myNumber = addUp(num3, num4);

// console.log(myNumber);

if (myNumber % 2 == 0) {
    console.log(myNumber);
	console.log('Even Number');
} else {
    console.log(num3 * num4);
}

