// let num1 = 3
// let num2 = 10

// const power = (num1, num2) => {
//     return num1 ** num2;
// }

// console.log(power);


//new activity - .pop takes last item from [Array]
// .push puts new info onto end of array

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
//  console.log(coffeeOrder);

//  coffeeOrder.pop();
//  console.log(coffeeOrder);

// coffeeOrder.push("Cait - Cappunccino");
// console.log(coffeeOrder);

// console.log(coffeeOrder[0], coffeeOrder[1]);

// Activity 1 

let favDrinks = [
    "tea",
    "coffee",
    "orange juice"
];
console.log(favDrinks); //Output: [ 'tea', 'coffee', 'orange juice' ]

favDrinks.push("mango juice");
favDrinks.push("hot chocolate");
console.log(favDrinks); //Output: [ 'tea', 'coffee', 'orange juice', 'mango juice', 'hot chocolate' ]

favDrinks.pop();
console.log(favDrinks); //Output: [ 'tea', 'coffee', 'orange juice', 'mango juice' ]

// Activity 2

// .map() example
let baseNums = [3, 4, 5, 6];

let modifiedArr = baseNums.map(function(element){
    return element *3;
});

console.log(modifiedArr); //Output: [9, 12, 15, 18]

// .shift() example (using favDrinks ^ array)
const firstElement = favDrinks.shift();
console.log(favDrinks); //Output: [ 'coffee', 'orange juice', 'mango juice' ]
console.log(firstElement); //Output: tea

// .unshift() example (favDrinks array)
console.log(favDrinks.unshift("milk", "water")); //Output: 5
console.log(favDrinks); //Output: [ 'milk', 'water', 'coffee', 'orange juice', 'mango juice' ]

// .slice() example
console.log(favDrinks.slice(2)); //Output: [ 'coffee', 'orange juice', 'mango juice' ]
console.log(favDrinks.slice(1, 3)); //Output: [ 'water', 'coffee' ]
console.log(favDrinks.slice(4, 5)); //Output: [ 'mango juice' ]
console.log(favDrinks.slice(-3)); //Output: [ 'coffee', 'orange juice', 'mango juice' ]
console.log(favDrinks.slice(1, -2)); //Output: [ 'water', 'coffee' ]

// .splice() example
const weekDays = ['Monday', 'Wednesday', 'Thursday'];
weekDays.splice(1, 0, 'Tuesday');
console.log(weekDays); //Output: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ]

weekDays.splice(4, 1, 'Friday');
console.log(weekDays); //Output: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]


//In lesson activity 

let favDrinks = [
    "tea",
    "coffee",
    "orange juice",
    "hot chocolate"
];

for (let drinksIndex=0; drinksIndex<favDrinks.length; drinksIndex++) {
    console.log(favDrinks[drinksIndex]);
}

//Short version of above^

for (let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}


// In lesson activity - for loops with if statement

let multiplesTwo = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// Randomises round up or down of a random number
for (let i = 0; i < 6; i++) {
    let random = Math.ceil(Math.random() * 10); 
    if (random < 7) {
        console.log(Math.floor(Math.random() * 49 + 1));
    } 
}

//Lesson activities - Coffee Order function
const coffeeOrder = (size, typeOfDrink) => {
    console.log( `Order received: ${size} ${typeOfDrink}`);
}

coffeeOrder("Small", "Cappuccino");

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));

