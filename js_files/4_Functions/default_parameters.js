// 
function interest(principal,rate,years){
    return principal*rate/100*years; 
}
console.log(interest(10000,3.5,5))  // no default parameters 


// old - method using logical opeartors 

function interest(principal,rate,years){
    rate=rate||3.5;
    years=years||5;
    return principal*rate/100*years; 
}
console.log(interest(10000))   // old 


// default parameters 
function interest(principal,rate=3.5,years=5){
    return principal*rate/100*years; 
}
console.log(interest(10000))  // new method 

// 
function interest(principal,rate=3.5,years){
    return principal*rate/100*years; 
}
console.log(interest(10000,5))  // Nan