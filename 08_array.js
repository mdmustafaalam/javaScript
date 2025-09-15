const myArr = [0,1,2,3,4,5];
const myHero = ["Marvel", "Tony Stack", "Thanos",5];

// console.log(myArr);
// console.log(myHero); // type Object
// console.log(myHero[1]); // type String

const myArr2 = new Array(1,2,3,4);
// console.log(myArr2);

// myArr.push(9);
// myArr.pop();

// myArr.unshift(17); // always insert the data in first index and shift all the index rest of the other element
// myArr.shift() // delete in first index element

// console.log(myArr.includes(9)); // false
// console.log(myArr.includes(4)); // true
// console.log(myArr.indexOf(2));

const newArray = myArr.join(); // joint into a string
// console.log(newArray); // type String

// slice splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);


