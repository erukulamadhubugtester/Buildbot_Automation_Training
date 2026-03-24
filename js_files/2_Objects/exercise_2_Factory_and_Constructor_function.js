// Factory function 

function new_data(user_name,user_id,user_work){
    return{
        user_name,
        user_id,
        user_work,
    }

}

let user_data=new_data("Madhu",123,"QA")
console.log(user_data)


// Constructor Function 
function New_data(user,user_id,user_work){
  
        this.user=user;
        this.user_id=user_id;
        this.user_work=user_work;

}

const second_user=new New_data("rukesh",321,"QA")
console.log(second_user)  // using this &  new key word