let arr=[1,2,3,4,5]

console.log(arr)

// soultion 1 
// arr=[];
// console.log(arr)

// soultion 2
let users = ["madhu", "ravi"];

// clear and reuse
users.length = 0;

users.push("surya");
console.log(users)

// soultion 3

let data=[]

data.length=0
console.log(data)


// Keep Same Reference

let a=["apple","mango","grapes","ornage"]

let b=a

console.log(a)
console.log(b)

a=[]
console.log(a)