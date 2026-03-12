function data(name,num){
    return{
        name:name,
        num:num,
        emp:function()
        {
            console.log("is a function")
        }


    };

     
}

console.log(data('madhu', 25))