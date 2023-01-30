for(var x = 1; x <= 3; x++)
{
    var ans = "";
    var n = ((x-1)*10)+1;
    for(var a = n; a <= x*10; a++)
    {
        ans += a +" ";
    }
    console.log(ans);
}