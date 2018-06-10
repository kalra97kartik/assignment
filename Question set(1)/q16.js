var a = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
for(i in a)
{ console.log('row:'+i)
    for(j in a[i])
    {
        console.log(""+a[i][j])
    }
}
