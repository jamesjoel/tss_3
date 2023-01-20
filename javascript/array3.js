let obj ={
    name : "gaurav",
    age : 25
}
let data = [
    "red",
    "green",
    "blue",
    "yellow",
    ["nidhi"],
    "pink",
    { x : "Indore"},
    obj
];


let a = data[4][0];
let b = data[6].x;
// let c = data[7].age;

let c = data[7].obj.age;
console.log(c);


// console.log(a);
// console.log(b);

let m = "red";
let n = "green";

// let arr = ["red", "green"];
let arr = [m, n];


// console.log(arr[0])