// 1️⃣ Arithmetic Operators

console.log("Arithmetic operators ")
let a = 10;
let b = 5;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 

// 2️⃣ Assignment Operators - ( Used to assign values to variables. )

console.log("Assignment operators ")

let c =1;
console.log(c=c+1); 
console.log(c -=3); 
console.log(c *=5); 
console.log(c /= 4); 


// 3️⃣ Comparison Operators - ( Used to compare two values. They return true or false.)

console.log("Assignment operators ")
 
let d = 2;
let e = 4;
let f = 4;

console.log(d == e);   // equal
console.log(e == f);   // equal

console.log(d === e);  // strict equal
console.log(e === f);  

console.log(d != e);   // not equal
console.log(e != f);  

console.log(d !== e);  // strict not equal
console.log(e !== f);  

console.log(d > e);    // greater than
console.log(e > d);    

console.log(d < e);    // less than
console.log(e < d);    

console.log(d >= e);   // greater or equal
console.log(e >= f);   

console.log(d <= e);   // less or equal
console.log(e <= f);


// 4️⃣ Logical Operators - " Used to combine multiple conditions. "
 console.log("  Logical Operators ");

let q = 10;

console.log(q > 5 && q < 20);
console.log(q < 5 && q < 20);


console.log(q > 5 || q > 20);
console.log(q < 5 || q < 20);


let r = 10;

console.log(!(r > 5));
console.log(!(r < 5));