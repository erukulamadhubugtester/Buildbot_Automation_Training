let price_range = [
    {price:"$", tooltip:"low", min:0, max:5},
    {price:"$$", tooltip:"medium", min:6, max:9},
    {price:"$$$", tooltip:"High", min:10, max:19}
];

let user_value = 10.9;

let result = price_range.find(r=>user_value >= r.min && user_value <= r.max);

console.log(result.tooltip);