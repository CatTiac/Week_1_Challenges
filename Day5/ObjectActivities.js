let drinksList = [ 
    "cola",
    "lemonade",
    "lucozade",
    "umbongo",
    "water"  
];
let priceList = [1.2, 1, 1.5, 2, 1];
let balance = 10

const drinkCheck = () => {
for(let i = 0; i < drinksList.length; i++) {
    console.log(drinksList[i]);
}
}

const balanceCheck = () => {
    console.log("The drinks available are:");
    for(let i = 0; i < priceList.length; i++) {
        console.log(`${drinksList[i]}: ${priceList[i]}`)
    }
    console.log(`Your available balance is: £${balance}`);
}
    const checkSelection = (choice) => {
        if (balance >= priceList[choice]) {
            console.log(`Enjoy your ${drinksList[choice]}, you've got good taste!`);
        } else {
            console.log("Please try again");
        }
    }
drinkCheck();
balanceCheck();
checkSelection(2);

// ACTIVITY - Example of an object called 'person' (parent) with the value 'name' (child).
// Used to store info.
const person = {
    firstName: "Cait",
    lastName: "Jackson",
    age: 33,
    looks: {
        eyeColour: "GreenyBlue",
        hairColour: "Dark brown",
    },
    favSongs: ["QOTSA - Go With The Flow", "Foo Fighters - Stranger Things Have Happened", "Gangs of Kin - Haterchild", "The Blue Stones - Oceans"],

}
const sayHi = (firstName, lastName) => {
    console.log(`Hello, my name is ${firstName} ${lastName}`)
}

sayHi("Cait", "Jacskon");
console.log(person.favSongs);

// If value doesn't exist you can still add it to an object e.g below
// person.likeThis = "Happy";
// console.log(person.likeThis);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.looks.eyeColour);
console.log(person.looks.array[3]);

// Alarm Clock example activity
daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

let day = "Saturday";

const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "get up at 7am"
}

if (day == "Monday" || day == "Tuesday"  || day == "Wednesday" || day == "Thursday" || day == "Friday"  || day == "Saturday"  || day == "Sunday")
if (day == "Saturday" || day == "Sunday") {
    console.log(alarm.weekendAlarm);

} else {
    console.log(alarm.weekdayAlarm);
}

// **2ND ATTEMPT - ALARM CLOCK

let today = new Date();
let weekday = today.getDay();
let options = { weekday: 'long'};
console.log(new Intl.DateTimeFormat('en-US', options).format(today));
const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "get up at 7am"
}

if (weekday == "1" || weekday == "2"  || weekday == "3" || weekday == "4" || weekday == "5"  || weekday == "6"  || weekday == "0")
if (weekday == "6" || weekday == "0") {
    console.log(alarm.weekendAlarm);

} else {
    console.log(alarm.weekdayAlarm);
}

//LESSON EXAMPLE
let offer = "none";
let time = 1200;

const cafe = {
    name:"Whitesheep",
    seatingCapacity:100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
openCafe() {
    if (this.hasSpecialOffers){
        return "Time for a special offer!";
    }
},
closeCafe() {
    return "We are closed, come back tomorrow!";
}
};

console.log(cafe.openCafe());

if (time < 1100){
offer = cafe.breakfastOffer;
console.log(cafe.breakfastOffer);
} else if (time < 1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
};
