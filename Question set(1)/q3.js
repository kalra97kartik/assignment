var n = /^[0-9]+$/
var m = '6';
var p = m.match(n);
if(p!=null)
{
    console.log('numeric : '+m)
}
else
{
    console.log('not numeric')
}
