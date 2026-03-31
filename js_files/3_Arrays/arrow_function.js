let info_data=[
    {user:"madhu"},
    {age:1},
    {place:"vijayawada"},
    {company:"BuildBot"}

];

const read_data1=info_data.find(m=>m.user ==="madhu")
const read_data2=info_data.findIndex(m=>m.place ==="vijayawada")


console.log(read_data1)
console.log(read_data2)