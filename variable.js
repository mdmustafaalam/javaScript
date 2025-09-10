console.log("Mustafa Alam");

const accountId = 123456;
let accountEmail = "mustafaalam@gmail.com";
var accountPassword = "123";
accountState = "West Bengal";
let accountCity; // We are investigation the accountCity for 


// accountId = 52 // not allowed
accountEmail = "mkboss@gmail.com";
accountPassword = "212121";
accountState = "Bengaluru";

console.log(accountId);

/*
preferred not to use var, Because of issue in block scope and functional scope 
this is a scope {}
*/
console.table([accountId, accountEmail, accountPassword, accountState]);
