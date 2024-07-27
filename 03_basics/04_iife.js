// Immediately invoked function expressions (IIFE)


(function chai(){
    //named iife
    console.log("DB CONNECTED");
})();

//()() here the 1st parenthis is the block in which function is written and 2nd is for the execution

// interview answer of what is iife
// Global scope ke pollution se problem hoti hai kayi baar to us global scope ke variables ya jo bhi vaha declare hai unke pollution ko hataane ke liye iife ka use krte hai

// ; is necessary to end the function otherwise it will run for infinte time

((name)=>{
    // unnamed iife
    console.log(`DB Connected 2 ${name}`);
})("Karan");
