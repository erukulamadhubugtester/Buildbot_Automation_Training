
// 1.  Create Current Date 
// let now = new Date();
// console.log(now); // **ISO 8601 format and the Z means UTC time.  // 2026-03-18T05:55:28.017Z
               


// 2. Create Custom Date 
let date = new Date("2026-03-23");
console.log(date);

// 3.  Get Date Values - fetch date values 
let d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime());

// 4. Difference Between Dates
let d1=new Date("2026-03-18");
let d2=new Date("2026-03-23")

let output=d2-d1

console.log(Math.floor(output))

let days=output/(1000*60*60*24)

console.log("Difference of days "+days)


// 4.a . Find number of days between dates and Expiry calculation