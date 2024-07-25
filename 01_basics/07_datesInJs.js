//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-15")
let myCreatedDate = new Date("01-15-2023")
// console.log(myCreatedDate.toLocaleString());

let myTampStamp = Date.now()
// console.log(myTampStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert into seconds

let newDate = new Date()
console.log(newDate.getMonth()+1); // month start from 0 in js

// let getTime = `${newDate.getDate()} and the time is ${newDate.getTime()}` // this is called string interpolation 

// console.log(getTime);

console.log(newDate.toLocaleString("default", {
    weekday: "long",
    minute: "2-digit"
}))