function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("S");
    console.log("T");
    console.log("A");
    console.log("F");
    console.log("A");
}

// sayMyName //Reference
// sayMyName(); // Execution

function addTwoNumber(num1, num2){  // Parameters
    console.log(num1 + num2);
}

// addTwoNumber(3, 5); // Arguments

function storeResult(n1, n2){
    let result = n1 + n2;
    return result;
}

const result = storeResult(5,8);

// console.log(`Result is: ${result}`);


function userLoggedIn(userName){
    if (!userName) {
        console.log("Please Enter a User Name");
        return;
    }
    return `${userName}, Just Logged In`
}
// console.log(userLoggedIn("Mustafa"));

// function calculateCartPrice(...num1){ // Rest Operator
function calculateCartPrice(val, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200,4,56,200));

const user = {
    userName: "Mustafa",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName}, and Price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    userName: "Mosto",
    price:399
})

const myNewArray = [200,400,600,500];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,600,800]));
