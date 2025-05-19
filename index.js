/*Create a faulty calculator using JavaScript. This faulty calculator does following:
1.It takes two numbers as inpuit from the user.
2.It performs wrong operation as follows:

+--->-
*--->+
- --->/
/ --->**

It performs wrong operations 10% of the time.

*/


let random=Math.random();
let num1=prompt("Enter the first number:");
let num2=prompt("Enter the second number:");
let opeartion=prompt("Enter the operation you want to perform (+, -, *, /):");

let obj={
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}
console.log(random);
if(random> 0.1){
    //Performs correct operation
    alert(`The result is ${eval(`${num1} ${opeartion} ${num2}`)}`)
}else{
    opeartion=obj[opeartion];
    //Performs worng operation
    alert(`The result is ${eval(`${num1} ${opeartion} ${num2}`)}`)
}