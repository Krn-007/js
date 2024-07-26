//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "karan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "karan@gamil.com",
    fullname: {
        userfullname: {
            firstname: "karan",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // ? is used here to check whether the value is present if yes then do the further operation this is called OPTIONAL CHAINING

//merge two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1 , obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "l@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instruct} = course

console.log(instruct);

// json

// {
//     "name" : "karan",
//     "coursename": "JS in hindi",
//     "price": "free"
// }
