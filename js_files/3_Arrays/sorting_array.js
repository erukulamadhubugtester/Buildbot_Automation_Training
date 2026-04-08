// method 1 - in side array  0 to 9  in-order if set order wise using sort() method 

let arr=[2,4,9,0,1]

arr.sort() // Ascending - order 
console.log(arr)

arr.reverse() // Descending Order
console.log(arr)

//  using number 10 after its string consider

let data1 = [10, 2, 5];
// data1.sort();
// console.log(data1); // default data showing 

// Using Compare Function
data1.sort((a, b) => a - b); // Ascending order using function here a & b are array elemts consider + in order swap
console.log(data1);

data1.reverse() // or  b,a => b-a  Descending 
console.log(data1)


// 3. -  Sorting Strings 
let users=["sailesh","jagadesh","madhu","rukesh","qa"]
users.sort()
console.log(users)


// 4. objects of array //  when sorting an array of objects, you must use a compare function.
const user_infos=[
    {id:1,name:"madhu"},
    {id:2,name:"jaga"},
    {id:0,name:null}
];

// user_infos.sort()
user_infos.sort((a,b) =>a.id-b.id )
console.log(user_infos)

user_infos.reverse()
console.log(user_infos)