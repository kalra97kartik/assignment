var x = (a,b) => {
 
    if(a==null)
    {
        return void 0;
    }
    else if (b==null)
    {
        return a[0] 
    }
    else if (b<0)
    {
        return []
    }
else { return a.slice(0,b)}
}
console.log(x([7,9,0,-2]))
console.log(x([],3))
console.log(x([7,9,0,-2],3))
console.log(x([7,9,0,-2],6))
console.log(x([7,9,0,-2],-3))