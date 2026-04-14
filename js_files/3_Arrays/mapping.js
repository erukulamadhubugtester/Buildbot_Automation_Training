let arr=[1,2,3,4,5,-1,-3,-5] // new array 

const arr_chanage=arr.map(n => n*2)
console.log(arr_chanage)  // values are changed all multiple by 2 transform same arr or values 



let users=["madhu","ram","jaga","qa"]
const greet_mes=users.map(message => `Hello  ${message}`)
console.log(greet_mes)


let data=[{user:"madhu",id:20},{user:"jaga",id:30},{name:"qa",id:1}];
const output=data.map( info=> info.id)
console.log(output)
let asc=output.sort()
console.log(asc)


let new_data=data.sort()
console.log(new_data)