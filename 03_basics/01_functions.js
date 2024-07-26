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
console.log(loginUserMessage())
