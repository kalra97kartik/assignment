function powEr(a)
{ 
    var count=0;

 if(a%2==0)
   {
    while(a!=1 || a%2==0)
    {a = a / 2;
     count++;}
   
console.log('power of 2 : '+ count)
   }
else
  { console.log('no')}
 
}
powEr(9);