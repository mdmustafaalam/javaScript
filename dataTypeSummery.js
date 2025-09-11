// primitive 
// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.30;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const userId = Symbol('123');

// console.log(id === userId);
// const bigNumber = 6516189848453119848n;


// Reference (Non Primitive)
// type : Array, Objects, Functions

const hero = ["SpidersMan", "TonyStack", "Thanos"];

let myObj = {
    name: "Mustafa",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Mustafa Alam";
let nickName = "Mosto";
nickName = "Mk Boss"

console.log(myName);
console.log(nickName);

let userOne = {
    email: "mustafa@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;
userTwo.email = "mkboss@amazon.in";

console.log(userTwo.email);
console.log(userOne.email);


