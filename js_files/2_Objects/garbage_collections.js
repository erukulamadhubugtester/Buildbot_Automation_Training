// one way method  
let data={user_name:"madhu"}

data=null
console.log(data)   // when run code in backend memory clean it .

// second method way - Object inside a function 

function info(){
    const data={number:100,num2:200}
    return data;
}
info(); // just call method 

// let out=info()
// console.log(out)

// third method way - Reference Removed
{num=230,num=240}

//  fouth way - Multiple References Example
const obj1={String:"hi"}

obj2=obj1

obj1=null
console.log(obj1)


//  fifth way - Both References

let obj5 = { name: "Madhu" };
let obj6 = obj5;

obj5 = null;
obj6 = null;
