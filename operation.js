let score = undefined;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber); // output NaN(not a number)

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => Nan
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


// 1 => true
// 0 => false
// "" => false
// "Mustafa" => true

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(typeof stringNumber);
console.log(stringNumber);
