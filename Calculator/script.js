let num1 =  parseFloat(prompt("Enter first number"));
let num2 =  parseFloat(prompt("Enter second number"));
let operator = prompt("Enter operator");
let result;
switch (operator) {
    case "+":
        result = num1+num2;
        break;
    case "-":
        result = num1-num2;
        break;
    case "*":
        result = num1*num2;
        break;
    case "/":
        result = num1/num2;
        break;

    default:
        console.log("Invalid operator");
        break;
}
