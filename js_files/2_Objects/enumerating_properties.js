const obj={
    name: 'madhu',
    info:function(){
        console.log("user info")

    }
}

for (let key in obj)
    console.log(key) // pass print properties 

for (let key in obj) {
  console.log(key, obj[key]);  // pass print data 
}

// for(let value of Object) // fail beacues only arrays or maps using of 
//     console.log(value)

for(let key of Object.keys(obj)) // print properties using for .. of 
    console.log(key)

for (let entry of Object.entries(obj)) { // entry methods prints arrays way 
  console.log(entry); 
}

if ('info' in obj)  // check out the data exit or not 
  console.log('yes');