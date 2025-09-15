const mySchoolFriend = ["Saheb", "Bikrom", "Saeed", "Anirban"];
const myCollegeFriend = ["Sammi", "Suraj", "Minarul"];

// mySchoolFriend.push(myCollegeFriend);

// console.log(mySchoolFriend);
// console.log(mySchoolFriend[4][2]);

const allFriends = mySchoolFriend.concat(myCollegeFriend);
// console.log(allFriends);

const myAllFriends = [...mySchoolFriend, ...myCollegeFriend];
// console.log(myAllFriends);

const anotherArray = [1,2,3,[4,5,6],7,8,[9,10,[11,12]],13];
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("mustafa"));
console.log(Array.from("mustafa"));
console.log(Array.from({name: "Mustafa"})); //interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

