const accountId = 144553
let accountEmail = "rn1122@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" // it can also be done but not a recommended method

let accountState;

/*
const cannot be changed
let can be changed
prefer to not to use var because of issue in block scope and functional scope
*/

//accountId = 2 // not allowed
accountEmail = "khfha@gmail.com"
accountPassword = "5466"
accountCity = "banglore"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
;