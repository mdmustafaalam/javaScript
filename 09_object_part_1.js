// Object declaration type : Singleton, Object Literals

// Object Literals

const mySymbol = Symbol("Key1");

const jsUser = {
    name: "Mustafa",
    "full name": "Md Mustafa Alam",
    [mySymbol]: "MyKey1",
    age: 22,
    location: "Kolkata",
    email: "mustafaalam3240@gmail.com",
    isLoggedIn: false,
    lasLoginDay: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "alammustafa324@gmail.com"; // Change the value of an key element
// Object.freeze(jsUser); // If i locked an object then use freeze to lock my object

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
