// const coffeeShop = {
//     branch:"Bean Bar",
//     drinks: {
//         drink1: "Cappuccino",
//         drink2: "Latte",
//         drink3: "Filter coffee",
//         drink4: "Tea",
//         drink5: "Hot chocolate",
//     },
//     drinksPrices: {
//         dPrice1: 2.30,
//         dPrice2: 2.35, 
//         dPrice3: 1.90, 
//         dPrice4: 1.80, 
//         dPrice5: 2.20,
//     },
//     food: {
//         food1: "Scone", 
//         food2: "Slice of Toast x2", 
//         food3: "Danish Pastry", 
//         food4: "Slice of cake", 
//         food5: "Sandwich",
//     },
//     foodPrices: {
//         fPrice1: 0.80, 
//         fPrice2: 1.00,
//         fPrice3: 1.10,
//         fPrice4: 1.50, 
//         fPrice5: 2.00,
//     },
// };

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// let myDrinks = addUp(2.3, 2.35);
// let myFood = addUp(0.8, 1);

// const drinksOrdered = () => {
//     console.log(`Your order is a ${coffeeShop.drinks.drink1} - £${coffeeShop.drinksPrices.dPrice1} & a ${coffeeShop.drinks.drink2} - £${coffeeShop.drinksPrices.dPrice2}`);
//     console.log(("Your total is: £"),myDrinks);
// }
// const foodOrdered = () => {
//     console.log(`Your order is a ${coffeeShop.food.food1} - £${coffeeShop.foodPrices.fPrice1} & a ${coffeeShop.food.food2} - £${coffeeShop.foodPrices.fPrice2}`);
//     console.log("Your total is: £",myFood);
// }

// drinksOrdered();
// foodOrdered();

let coffeeShop = [
    {cat: "branch", list:"Bean Bar"},
    {cat: "drinks", list: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate",]},
    {cat: "drinksPrices", list: [2.30, 2.35, 1.90, 1.80, 2.20,]},
    {cat: "food", list: ["Scone", "Slice of Toast x2", "Danish Pastry", "Slice of cake", "Sandwich",]},
    {cat: "foodPrices", list: [0.80, 1.00, 1.10, 1.50, 2.00,]},
];

const addUp = (num1, num2) => {
    return num1 + num2;
}

let myDrinks = addUp(coffeeShop[2].list[1], coffeeShop[2].list[2]);
let myFood = addUp(coffeeShop[4].list[1], coffeeShop[4].list[2]);

const drinksOrdered = () => {
    console.log(`Your order is a ${coffeeShop[1].list[1]} - £${coffeeShop[2].list[1]} & a ${coffeeShop[1].list[2]} - £${coffeeShop[2].list[2]}`);
    console.log(("Your total is: £"),myDrinks);
}
const foodOrdered = () => {
    console.log(`Your order is a ${coffeeShop[3].list[1]} - £${coffeeShop[4].list[1]} & a ${coffeeShop[3].list[2]} - £${coffeeShop[4].list[2]}`);
    console.log("Your total is: £",myFood);
}

drinksOrdered();
foodOrdered();