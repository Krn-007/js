let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("inner", a);
}

// console.log(a);
// console.log(b);

function one(){
    const username = "karan"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "karan"
    if(username === "karan"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++interesting+++++++++++++

function addone(num){
    return num+1
}

addone(5)

const addTwo = function(num){
    return num+2
}

addTwo(5)