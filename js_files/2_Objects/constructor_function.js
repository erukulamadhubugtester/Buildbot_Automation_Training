function Emp(name,num){
    this.name = name;
    this.num = num;
    this.data = function(){
        console.log("emp data")
    };
}

const user1 = new Emp("madhu",9)
console.log(user1)
user1.data()            // executes function