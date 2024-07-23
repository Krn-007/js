// Primitive

// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

// javascript is a dynamically typed language, this means
// variable datatypes can be determined at runtime and you
// not need to explicitly declare the type of a variable before using it.

//examples of primitive datatypes

//Numbers
    const score = 100
    const scoreValue = 100.3

// boolean
    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;
   
// symbol
    const id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(id === anotherId); 
    
// bigint
    const bigNumber = 365621651326846843548n

// Reference (non-primitive)

//Arrays, objects, Functions

//Arrays
const heroes = ["shaktiman","naagraj","doga"]

//Objects

let myObj = {
    name: "karan",
    age: 22,
} // everything inside the curly braces is the object

//function

const myFunction = function(){
    console.log("hello World");
}

// typeof is used to identify the datatype of variable

console.log(typeof myObj);
console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)
// whenever stack is selected a copy of original data is made and the operations are performed on it

// example

    let myName = "Karan"
    let anotherName = myName
    anotherName = "Lovely"

   console.log(anotherName);
   console.log(myName);


// whenever heap is selected a reference of original data is provided and the changes are made to original data

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "karan@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

