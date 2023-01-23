function demo(a=10, x=2)
{
   
    let b = a*a;
    let y = b/x;
    return y;
}
let ans1 = demo(5, 2);
let ans2 = demo(27, 5);
let ans3 = demo(10, 4);

let ans4 = demo();
let ans5 = demo(10);

console.log(ans4);