/*

*****
 ****
  ***
   **    
    *

*/
var y = 0;
for(var x = 10; x >= 1; x--)
{
    var str = "";
    for(b=1; b<=y; b++)
    {
        str +=" ";
    }

    for(var a=1; a<=x; a++)
    {
        str +="*";
    }
    console.log(str);
    y++;

}