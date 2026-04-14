let arr = [10, 20, 30, 40];

// 1.every()
const data_check = arr.every((value) => {  // every method check true or flase in array values 
    return value >= 11;
});

console.log(data_check); 



// 2.some()  method 
const output=arr.some((arr_value)=>{ // check atlast one value pass its true 
    return arr_value >= 500;
});
console.log(output)