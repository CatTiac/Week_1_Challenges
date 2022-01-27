// const pet = {
//     name : "Jeff",
//     typeOfPet: "Dragon",
//     colour: "Green",
//     age: 1,
//     eat: function(){
//         console.log(this.name + " is eating.");
//     },
//     drink: function(){
//      console.log(this.name + " is drinking.");
//      },
// }
// pet.eat();
// pet.drink();

const pet = {
    name: "Jeff",
    typeOfPet: "Dragon",
    colour: "Green",
    age: 1,
    eat: function() {
   console.log(`${pet.name} is eating`);
},
drink: function() {
    console.log(`${pet.name} is drinking`);
}
}
pet.eat();
pet.drink();