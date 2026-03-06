const data=["madhu","test","1","automation"];

console.log(data);

data[2]="replace";
console.log(data)


data.push("grape");     // add to end
data.unshift("kiwi");   // add to beginning

console.log(data);

data.pop();     // remove from end
data.shift();   // remove from beginning
console.log(data);

console.log(data.length);