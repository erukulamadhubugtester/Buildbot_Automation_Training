function greet() {
  console.log("Hello! world");
}
greet(); // Calling the function

// 2️⃣ Functions with Parameters
function greet(name) {
  console.log("Hello " + name);
}

greet("Alice"); // Hello Alice

function square(number) {
  return number * number;
}

console.log(square(4));
console.log(square(5));
console.log(square(6));