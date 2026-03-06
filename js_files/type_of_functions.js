
// Function Declaration

function user(){
    console.log("hoello world ");
}

user(); // must be cll function 

// why functions 
// Reusability , Code Organization , Maintainability , Avoid Repetition 

// 1. Function Declaration
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 3));

// 2. Function Expression
const greet = function() {
  console.log("its  function expression");
};

greet();

// 3. Arrow Functions (Modern JS) ECMAscript
const add = (a, b) => {
  return a + b;
};
let output=add(2,7);
console.log(output);

// 5️⃣ Functions With Parameters
function name_call(name) {
  console.log("here " + name);
}

name_call("Rahul");
name_call("Priya");


// 6️⃣ Functions With Return Values
function square(num) {
  return num * num;
}

let result = square(5);
console.log(result);