var a =[
    {studentName:'David',mark:80},
    
    {studentName:'Vinoth',mark:77},

    {studentName:'Divya',mark:88},
    
    {studentName:'Isitha',mark:95},
    
    {studentName:'Thomas',mark:68}
]
for(i=0;i<a.length;i++)
     {   console.log('grade of :'+a[i].studentName)
      x=a[i].mark 

if( x<60) 
{console.log('F')}

else if (x<70) 
{console.log('D')}

else if(x<80)
{console.log('C');}

else if(x<90)
{console.log('B')}

else if (x<100)
{console.log('A')}
}

