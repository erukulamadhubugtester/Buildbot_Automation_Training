let arr=[1,2,3,4,5,6,7]
console.log(...arr)  // spread values .


// method-1 Combine Arrays
let num=[1,2,4,6,7,8]
let data=["madhu","sai","ram","qa"]

let output=[...num,...data]
console.log(output)

// Method-2  Add Elements While Combining

let comb_data=[...num,"hello js ","welcome js",...data]
console.log(comb_data)

// Method -3 Copy Array (Clone) 

let clone_data=[...comb_data]
console.log(clone)
