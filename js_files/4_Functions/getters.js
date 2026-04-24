const name={
    user_name:"madhu",

    get act_name(){  // 👉 Getter is a special function used to access (read) a value from an object, and it must return a value.
        return this.user_name

    }
}

console.log(name.act_name); 