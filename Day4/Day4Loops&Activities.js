// Lesson Activity - Sandwich topping funtion

const subToppings = (t1, t2, t3, t4, t5) => {
    console.log(`Preparing your sandwich with toppings of ${t1}, ${t2}, ${t3}, ${t4} and ${t5}`);
}
subToppings("cheese", "chicken", "lettuce", "onion", "tomato");

//Second array

let values = [1, 2, 3];
values.unshift(4);
console.log(values);

Activity(1)

let favDrinks = [
    "tea",
    "coffee",
    "orange juice",
    "mango juice",
    "hot chocolate"
];

favDrinks.push("water", "milk");
console.log(favDrinks);

for (let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}

//Activity(2)

for(let x = 0; x < 6; x++) {
    console.log(Math.random() * 49 + 1);
}

//Activity(3) - Reverse counting (reversed ^ loop)

for(let y = 9; y > -1; y--) {
    console.log(y);
}

Activity(4)

let favFilms = [ 
    "Harry Potter",
    "The Mask",
    "Ghostbusters",
    "Big Hero 6"  
];
const filmCheck = () => {
for(let z = 0; z < favFilms.length; z++) {
    console.log(favFilms[z]);

}
    if (favFilms[2] == "Ghostbusters") {
        console.log("Yey it's Ghostbusters")
    }
    else{
        console.log("booo, we want Ghostbusters.")
    }
}

filmCheck();

Activity(5)

for (i = 0; i < 6; i++) {
    let ranNum = Math.ceil(Math.random() * 30) + 1;
    console.log(ranNum);
    if (ranNum % 7 == 0) {
        console.log("Divisible by 7!")
    } else {
        console.log("NOT divisible by 7...")
 }
    }

Activity(6)

For loop example:

let lottoNums = [ 10, 15, 7, 41, 35, 33, 7];
const numCheck = () => {
for(let i = 0; i < lottoNums.length; i++) {
    console.log(lottoNums[i]);
}}
numCheck();

//While loop example:

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);

Do...While loop example:

let resultNum = '';
let i = 0;

do {
  i = i + 1;
  resultNum = resultNum + i;
} while (i < 8);

console.log(resultNum);

//Activity(7)
//***WORKS BUT DOESN'T GO THROUGH NUMS 1-20*** 
// function primeCheck(num) {
//     for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//     return num > 1;
//     }
// }
//     console.log(primeCheck(7));

//***GOES THROUGH NUMBERS FROM 1-20 RETURNING PRIMES***/
function primeTrue(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
        return false;
    }
    return true;
}
for (let i = 0; i < 21; i++) {
    if(primeTrue(i)) console.log(i);
}