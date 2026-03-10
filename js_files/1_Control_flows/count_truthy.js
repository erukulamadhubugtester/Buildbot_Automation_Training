const arr = ["",2,null,undefined,false,"qa","a",{}];

let truthy = 0;
let falsy = 0;

for(let value of arr){
    if(value){
        console.log(value, "→ truthy");
        truthy++;
    } else {
        console.log(value, "→ falsy");
        falsy++;
    }
}

console.log("Truthy count:", truthy);
console.log("Falsy count:", falsy);