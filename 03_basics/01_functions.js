function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1+number2
}

const result = addTwoNumbers(5,9)
// console.log("Result : ",result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter a username");
    }
    else{
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage("karan"))
//console.log(loginUserMessage())

function calculateCartPrice(...num1){ // ... is a spread/rest operator which has functionality depend on the usecase here it used to gather all the data passed into the function and storing in the array
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user = {
    username: "karan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "karan",
    price: 399
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,600,300]));