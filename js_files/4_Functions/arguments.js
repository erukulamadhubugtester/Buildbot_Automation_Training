// 1.method 
function sum(a,b){
  return a+b;
};
console.log(sum(10,46))   // 10 and 46 are arguments
                         //a and b are parameters


// 2.method
function sum1(a, b) {
  console.log(arguments); // using arguments stores all passed values
  return a + b;
}

sum1(1, 6);

/** 
Note : 
👉 sum → clean and modern (uses parameters)
👉 sum1 → shows internal arguments object **/


function add(){
  let total =0;
   for(let value of arguments)
    total +=value;
  return total

};

console.log(add(1,2,3,4,6,7,9)) // add all arguments using object parameter 