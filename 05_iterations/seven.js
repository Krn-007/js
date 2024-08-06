// reduce

const myNums = [1,2,3,4,5,6]

// const myTotal = myNums.reduce( (acc, curval)=> {
//     console.log(`acc value is ${acc} and curval is ${curval}`);
//     return acc + curval
    
// }, 0)
const myTotal = myNums.reduce( (acc, curval)=> acc+curval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "dsa Course",
        price: 3999
    },
    {
        itemName: "Mern Course",
        price: 7999
    },
]

const totalCost = shoppingCart.reduce((acc, item)=>  acc + item.price,0)

console.log(totalCost);
