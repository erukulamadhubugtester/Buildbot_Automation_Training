// 1 method 
let data="  MADHU qa buildbot js  "  // this is String primitive type - most using js fast,simple,easy,less memory 

let new_data=new String("Test on Buildbot") // String Object - more complex more memory.


console.log(data === new_data)  // checking type and value flase 
console.log(data == new_data) // this is also flase 


console.log(data.toLocaleUpperCase());

console.log(data.toLocaleLowerCase());

console.log(data.replace("js","welcome heloo world "));

console.log(data.search("welcome heloo world ")); // why -1 value 

console.log(data.search("js")); //  showing plave value 

console.log(data.charAt(4));  // find char

console.log(data.endsWith("js"));

console.log(data.length);

console.log(data.at(2));

console.log(data.split("  "));

console.log(data.trim());

console.log(data.trimStart());

console.log(data.trimEnd());