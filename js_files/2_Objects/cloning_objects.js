const old_obj={
    user_name:"madhu",
    user_id:1234,
    bio_info:function(){
        console.log("user bio info data")
    }
}

// 1. for in loop this method  to old method - adding old to new object 
const new_obj={}
for(let key in old_obj)
    new_obj[key]=old_obj[key]
console.log(new_obj)


// 2. assing method  this method - adding old to new object 

const new_obj2 = Object.assign({}, old_obj);
console.log(new_obj2)

// 2.1 we can new key and value also 
const new_obj3 = Object.assign({user_dep:"qa"}, old_obj);
console.log(new_obj3)


// 3. Spread Operator ( ...)  this using in projects new 

const new_obj4={...old_obj}
console.log(new_obj4)