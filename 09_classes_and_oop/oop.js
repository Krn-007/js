const user = {
    name: "Karan",
    email: "karan@gmail.com",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user Details fro dataBase");
        
    }
}

// console.log(user.email);
// console.log(user.getUserDetails());

//constructor

//const promise = new Promise() // new keyword is constructor function which allows you to create multiple instances using one object literal


// for ex.

function User(username, loginCount, isLoggedIn){
    this.username  = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

   // return this
}

const userOne= new User("karan", 10 , true)
const userTwo= new User("Nidhi", 9 , false)

console.log(userOne);
console.log(userTwo);

// whenever we use the new keyword it first, create, an empty object which is called instance step one creates an empty object. Step two constructor function is called. Whenever we use new keyword. Step three mentioned arguments are injected into the this keyword.