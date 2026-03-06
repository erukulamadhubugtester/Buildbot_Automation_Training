function test()
{
    console.log("this is Function Expressions")
}
test(); 


function emp_greet(name){
    console.log("hello " + name)
}

let name_is = "madhu"
emp_greet(name_is)

function calculate_math(a,b)
{
    return a+b
}
console.log(calculate_math(2,9))


const add=(c,d) => { // ecma script
    return c*d
}
console.log(add(2,7))

