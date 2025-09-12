// Dates

let myDate = new Date(); // type Object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2003, 3, 1);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2003, 3, 1, 5, 30);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2003-04-01");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate);
