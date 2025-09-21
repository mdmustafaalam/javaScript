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

console.log(`Result is: ${result}`);
