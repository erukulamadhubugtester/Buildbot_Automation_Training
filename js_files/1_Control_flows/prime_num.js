for(let i=2; i<=10; i++)
{
    let isprime=true;
    for(j=2; j<i; j++)
    {
        if(i%j === 0)
        {
            isprime=false;
            break;
        }
    }
    if(isprime)
        console.log(i)
}