//1st Activity - Grid Example - Checking values at specific index in array

   
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

let toCheck;
for (let i = 0; i <2; i++) {
    if(i == 0) {
        toCheck = "x";
    } else {
        toCheck = "o";
    }
             if (grid[0][0] == toCheck) {
                 console.log("You won!");
             } else {
                 console.log("No win yet!");
             }
             break;
            }

//Functions Example - Coffee Machine
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to start");
        coffeeIsGrinding = true;
    }
}

    pressGrindBeans();

    //Lesson activity 2 - ATM function example

    let accNum = 12345678;
    let balance = 1000;
    let amount = 100;

    const cashWithdrawal = (amount, accNum) => {
        balance -= amount;
           if (balance <= 0)
           { console.log("You do not have sufficient funds. Please try again.");
    }
        console.log(`Withdrawing ${amount} from account ${accNum} your balance is ${balance}`);
    
    }

    cashWithdrawal(amount, accNum);


    //Maths - Returns a simple maths function adding up

    const addUp = (num1, num2) => {
        return num1 + num2 * 50 / 2;
    }

let myNumber = addUp(7, 3);

    console.log(addUp(7, 3));
    console.log(myNumber);

    //A variable that stores an anonymous function
    const square = function(number) {
        return number * number;
    };

    square(5);

//Cinema Ticket Machine activity
//Need something to quantify age first
let age = 33

if (age < 18) {
    console.log("Child Ticket - £8")
}
else if (age > 17 && age < 60) {
    console.log("Adult Ticket - £10.95")
}
else if (age > 59) {
    console.log("Senior Ticket - £7.50")
}
