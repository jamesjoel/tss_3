/*
     *
    **
   ***
  ****
******

*/
var num = 30;


var y = num;
for(var x= 1; x <= num; x++)
{

    var space = "";
    for(var a = 1; a <= y; a++)
    {
        space +=" ";
    }
    for(var b = 1; b <= x; b++)
    {
        space +="*";
    }
    console.log(space);
    y--;

}



