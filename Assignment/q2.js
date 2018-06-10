//conversion from decimal to binary.
var x = 'octal'
switch (x)
{case 'binary' :
console.log('decimal to binary')
console.log(parseInt(7,10).toString(2))
break;

case 'octal':
console.log('decimal to octal')
console.log(parseInt(7,10).toString(8))
break;

case 'hexadecimal':
console.log('decimal to hexadecimal')
console.log(parseInt(7,10).toString(16))
break;
}