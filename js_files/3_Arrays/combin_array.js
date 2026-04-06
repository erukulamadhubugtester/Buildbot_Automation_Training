let num=[1,2,3,4,5]

let names=["madhu","ai","jagadesh"]

console.log(num.concat(names)) // adding two arrays 

console.log(names.concat(num))


// slice - remove data - no reuse 

let remove_data=[10,20,49,50]
let output=remove_data.slice(1,2) // also start < end 
console.log(output)
console.log(remove_data)