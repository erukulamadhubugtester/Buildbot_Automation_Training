function sum(...numbers) { // ...- rest operator
  return numbers.reduce((total, num) => total + num, 0); // must be use reduce method
}
console.log(sum(1, 2, 3));



// 
function sum(discount,...prices){
const total = prices.reduce((a,b)=>a+b);
return total *(1-discount);
}
console.log(sum(0.1,20,30,1));