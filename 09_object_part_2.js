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

console.log(regularUser.fullName.lastName);
