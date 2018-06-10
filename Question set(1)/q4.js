var validate =/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
var u ='https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url';
var res = u.match(validate)
if(res==null)
{
    console.log("Invalid URL");
}
else
{
    console.log('Valid URL');
}