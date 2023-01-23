function demo(a=10, x=2)
{
   
    let b = a*a;
    let y = b/x;

    // return { i : b, m : y};
    return [b, y]

}

let ans =demo(10, 5);
console.log(ans)