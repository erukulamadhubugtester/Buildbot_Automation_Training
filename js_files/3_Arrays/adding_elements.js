const arr=[10,20,30,40]

console.log(arr)

// last place adding push 
arr.push(1,2)
console.log(arr)

// adding at start place 
arr.unshift(40,50,60)
console.log(arr)

// adding  middle
arr.splice(2,0,"madhu","test",'a') // splice(index, deleteCount, items...)
console.log(arr)

// remove end value 
arr.pop(10,2)
console.log(arr)

// remve start one 
arr.shift() // no need values 
console.log(arr)