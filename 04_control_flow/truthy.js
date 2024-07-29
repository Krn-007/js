const userEmail = []

if (userEmail) {
    console.log("got user email");
}else{
    console.log("don't have user email");
}

//falsy values
/* false,0, -0,BigINT 0n, null, undefined, Nan */

// Truthy Values
/* "0", 'false' , " ",[], {}, function(){} */

// chech whether the array is empty

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj.length === 0)){
    console.log("object is empty");
}

