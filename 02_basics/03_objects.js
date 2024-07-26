// singleton means when we use the constructor to create an object then the created object is one of a kind(apne tarah ka ek hi object bnta h)
//example

Object.create // this is a constructor method

//object literals means creating an object which is not one of a kind

const jsUser1 = {} // here curly braces means objects which is currently an empty object

const mySym = Symbol("key1")

const jsUser2 = {
    name: "Karan",
    "full name" : "Karanbeer Singh",
    [mySym]: "mykey1", // to add symbol in the object keys always have to declare it within square brackets
    age: 20,
    email: "karan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

// console.log(jsUser2.email);
// console.log(jsUser2["email"]);
// console.log(jsUser2["full name"]);
// console.log(jsUser2[mySym]); // to access symbol always have to use square brackets


jsUser2.email = "karan@gmail.com" // to change the values
// Object.freeze(jsUser2) // this is uised to lock the object so that none can change it
jsUser2.email = "karan@chatgpt.com" 

// console.log(jsUser2);

jsUser2.greeting = function(){
    console.log("good morning");
}
jsUser2.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser2.greeting());
console.log(jsUser2.greetingTwo());