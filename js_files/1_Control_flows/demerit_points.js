function checkspeed(speed){
    const speedlimit=60;
    const kmperh_point=5;

    if(speed < speedlimit)
        return "speed ok - normal"
    else
    {
     let points=Math.floor((speed-speedlimit)/kmperh_point)
     if(points >=12)
        return "License Suspended"
    else
        return points


    }
}
console.log(checkspeed(120))