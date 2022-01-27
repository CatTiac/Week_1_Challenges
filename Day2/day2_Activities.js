//Activity 1 

let myName = "Cait";
let myAge = "33";
let favColour = "Green"

console.log(`My name is ${myName}, my age is ${myAge} and my favourite colour is ${favColour}.`);

console.log("My name is " + myName + ", my age is " + myAge + " and my favourite colour is " + favColour + "." );

console.log(`Hi! My name is ${myName.toUpperCase()}, the length of my favourite colour is ${favColour.length} letters.`);

//Activity 2

let meals = ["cereal", "toast", "pasta salad", "cheese sandwich", "roast dinner", "lasagne"]

console.log(" For breakfast I ate " + meals[0]);
console.log(" For lunch I ate " + meals[2]);
console.log(" For dinner I ate " + meals[4]);

console.log(`Today I will be eating ${meals[1]} for breakfast, then a ${meals[3]} for lunch and ${meals[5]} for dinner.`);

let breakfast = ["cereal", "toast", "croissant"]
let lunch = ["pasta salad", "bowl of soup", "cheese sandwich"]
let dinner = ["roast dinner", "lasagne", "pizza"]

let random = Math.floor(Math.random() * breakfast.length);
let random2 = Math.floor(Math.random() * lunch.length);
let random3 = Math.floor(Math.random() * dinner.length);
console.log(" Today i'll be eating a " + (breakfast[random]) + ", then a " + (lunch[random2]) + " for lunch and then " + (dinner[random3]) + " for dinner.");

//Activity 3

    let myBirthday, today, bday, diff, days;
    myBirthday = [10,4];
    today = new Date();
    bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
    if(  today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear()+1);
    }
    diff = bday.getTime()-today.getTime();
    days = Math.round(diff/(1000*60*60*24));
    console.log(days+" days until Cait's birthday!");

//Activity 4 

let space1  = "x"
let space2 = "o"
let space3 = " "
let space4  = "x"
let space5 = "x"
let space6 = " "
let space7  = "o"
let space8 = " "
let space9 = " "

let grid =    
`   
    |   |  
  ${space1} | ${space2} | ${space3}
    |   | 
 ------------
    |   | 
  ${space4} | ${space5} | ${space6}
    |   | 
 ------------
    |   | 
  ${space7} | ${space8} | ${space9}
    |   | `;

    console.log(grid);


    
// In lesson activity - Switch and if else
const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
        case grade >= 60:
            console.log("Merit");
            break;
            case grade >= 50:
                console.log("Pass");
                break;
                default:
                    console.log("Failed");

}

if (grade >= 70) {
console.log("Distinction");
} 
else if(grade >= 60) {
console.log("Merit");
}
else if (grade >= 50){
console.log("Pass");
}
else {
console.log("Failed");
    }
