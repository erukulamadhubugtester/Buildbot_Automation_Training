// let a = { user_name: "madhu" };
// let b = { user_name: "madhu" };

// // console.log(a === b); // false

// let c = a
// console.log(a === c); // true - a ref
// console.log(b === c); // false - b not ref obj


// Compare Values 
function areEqual(obj1, obj2) {
    return obj1.name === obj2.name &&
           obj1.age === obj2.age;
}

let d = { name: "Madhu", age: 25 };
let e = { name: "Madhu", age: 25 };

console.log(areEqual(d, e)); // true


// Compare Reference 
function cr_equal(cr1, cr2) {
    return cr1 ===  cr2;
}

let c1 = d

console.log(cr_equal(c1, d)); // true 