const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}

const arr = ["cpp", "js", "rb", "swift"]

for (const key in arr) {
    console.log(arr[key]);
}