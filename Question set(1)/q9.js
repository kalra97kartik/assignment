var x = [1,2,4,8,6,0,7]
function sortNumber(a,b){return a-b}
console.log((x.sort(sortNumber)));
var temp = (x.sort(sortNumber));
console.log(temp[temp.length-2])