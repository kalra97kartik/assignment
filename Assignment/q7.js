function gcd (a,b)
{  a=Math.abs(a);
   b=Math.abs(b)
    if(a==0)
   {
       console.log(b);
   } 
   else if (b==0)
   {
     console.log(a)
   }
  else
{
    for(i=0;i<(a+b);i++)
    {
        if(((a%i)==0)&&((b%i)==0))
        {m = i;} 
    }
console.log(m)
}
}
gcd(13,15)