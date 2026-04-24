let user_age = 18;

try {
  if (user_age < 18) {
    throw new Error("User is under 18");
  }
  console.log("Access granted");
} catch (error) {
  console.log("Access denied:", error.message);
}



// 2 - error line code 
try {
    let data = JSON.parse('{"name": "madhu"'); // line error missing - } 
    console.log(data.name);
} catch (error) {
    console.log("Error occurred:", error.message);
}

// 3
try {
  let a = 10, b = 2;

  if (b === 0) {
    throw new Error("Cannot divide");
  }
  console.log(a / b);
} catch (err) {
  console.log(err.message);
}


