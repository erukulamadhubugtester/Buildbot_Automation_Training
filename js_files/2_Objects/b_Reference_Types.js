let obj={
    user:"madhu"
}

console.log(obj.user)

let obj2=obj

console.log(obj2)
console.log(obj2.user)

obj2.user="qa user"
console.log(obj.user)  // obj2 update data and obj also chnage value 