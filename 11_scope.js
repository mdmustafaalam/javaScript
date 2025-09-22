// var c = 300;
let a = 208;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const userName = "Mustafa";

    function two() {
        const website = "Youtube";
        console.log(userName);
        
    }
    // console.log(website);
    two();
}
// one();

if (true) {
    const userName = "Mustafa";
    if (userName === "Mustafa") {
        const website = " Linkedin";
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);
