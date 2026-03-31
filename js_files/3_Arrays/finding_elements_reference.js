const courses=[
    { id :1, name:"madhu"},
    { id :2, name2:"jagadesh"},
];
console.log(courses)


// 1. finding ref-obj 
const one_data=courses.find(function(one_data){
    return one_data.id === 2;
})

console.log(one_data)

const two_data=courses.find(function(two_data){
    return two_data.name === "madhu";
    // return two_data.name === "123"; // if not match  undefined 
})

console.log(two_data)


// 2. find findindex()
const index_is=courses.findIndex(function(index_is){
    return index_is.name === "madhu"; 

    // return index_is.name === "3242";  // if data not match its -1 

})

console.log(index_is)
