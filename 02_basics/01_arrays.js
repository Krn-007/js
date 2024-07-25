//arrays

const myArr = [2,4,5,6, "karan", true]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(4,5,6,1,33,4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice , aplice

console.log("A", myArr);

const myn1 = myArr.slice(2,5)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(2,5)
console.log(myn2);
console.log("C", myArr);