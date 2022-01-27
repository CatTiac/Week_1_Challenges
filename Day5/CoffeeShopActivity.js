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