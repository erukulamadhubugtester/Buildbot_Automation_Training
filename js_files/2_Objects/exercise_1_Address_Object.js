let obj_data={
    home:"a",
    street:"b",
    city:"c",
    pin:"d"
}

// console.log(obj_data)

function show_address(obj_data){
    for(let key in obj_data)
        console.log(key,obj_data[key])
}

show_address(obj_data)