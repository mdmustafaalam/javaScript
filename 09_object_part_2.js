// Singleton

// const bgmiUser = new Object(); // Singleton Object

const bgmiUser = {} // Non-Singleton Object

bgmiUser.id = "123abc";
bgmiUser.name = "Mustafa";
bgmiUser.isLoggedIn = false;

// console.log(bgmiUser);

const regularUser = {
    email: "mustafa@google.com",
    fullName: {
        firstName: "MD",
        middleName: "Mustafa",
        lastName: "Alam",
    }
}

// console.log(regularUser.fullName.lastName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {2: "a", 3: "b"};
const obj3 = {4: "a", 5: "b"};

// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const arrayUser = [
    {
        id: 1,
        email: "one@google.com",
    },
    {
        id: 2,
        email: "two@google.com",
    },
    {
        id: 3,
        email: "three@google.com",
    }
]
// console.log(arrayUser[1].id);


