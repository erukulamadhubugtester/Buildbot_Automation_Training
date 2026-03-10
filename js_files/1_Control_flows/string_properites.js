const emp={
    name : "madhu",
    num : 10,
    in:11,
    out:8,
    time:"pm"
}

function string_properties(obj){
    for(let key in obj){
        if(typeof obj[key] === "string")
            console.log(obj[key])
    }
}

string_properties(emp)