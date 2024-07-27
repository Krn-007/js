let user ={
    username: "Karan",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "karan"
//     console.log(this);
// }

// chai()

// arrow function

// const chai = function(){
//     let username = "karan"
//     console.log(this.username);
// }

// const chai = ()=>{
//     let username = "karan"
//     console.log(this);
// }


// chai()

// arrow function

// const addTwo = (num1, num2)=>{
//     return num1+num2
// } // this is called explicit return it means we have to metion return here

// const addTwo = (num1, num2) =>  num1+num2

//const addTwo = (num1, num2) =>  (num1+num2) // this is called implicit return it means we don't have to mention return here 

const addTwo = (num1, num2) =>  ({username: "karan"}) // in this way we can return object

console.log(addTwo(4,5))

const myArray = [1,2,2,5,6]


// myArray.forEach(()=>{})