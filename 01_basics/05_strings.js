const name = "Karan"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

const gameName = new String('Karanh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "   karan     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://karan.com/karan%20gill"

console.log(url.replace('%20','-'))

console.log(url.includes('key'))


console.log(gameName.split('-'));

