// Method 1 - using for loop 
let arr=[10,20,30,40]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Method 2 - using for...of method 
for (let value of arr) {
    console.log(value);
}

// Method 3- using foreach() & function method 

arr.forEach(v => console.log(v));

// Method 4 - 
