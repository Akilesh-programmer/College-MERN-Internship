console.log(a);
// hoisting
var a = 10;
// global scope / Function scope
console.log(a);

// ES6
// let and  const
// console.log(b);
// reference error
// temporal Dead Zone
let b = 20;
b = 130;
// Block Scope
console.log(b);

// {
//     let b = 30;
//     console.log(b);
// }

// functions
// 1. Named Functions
// 2. function declaration

function namedFunc() {
  console.log("Named function called");
  console.log("Named function called");
  console.log("Named function called");
}

// function call/Invokation
namedFunc();
// funcExp();
// 2. Function Expression

let funcExp = function () {
  console.log("Function Expression Called");
};

funcExp();

// 3. Arrow Functions(ES6)
let arrow = () => {
  console.log("Arrow Function called");
};

const addTwoNumbers = (parameter1, parameter2) => {
    console.log(parameter1, parameter2);

    let num1 = parameter1 || 10;
    let num2 = parameter2 || 20;
    let sum = num1 + num2;

    console.log("The sum of two numbers is: ", sum);
}

addTwoNumbers(20, 50);
addTwoNumbers(40, 50);

addTwoNumbers();

{
    let a = 10;
    let b = "2";

    console.log(a/b);
    console.log(2==="2");

    let c = [1, 2, 3, "arr"];
    let d = [1, 2, 3, "arr"];
    console.log(c[0]=== d[0]);

    let arr = [1, 2, 3, 4, 5, 6];

    // for loop
    for(let i=0; i<arr.length; i++) {
        arr[i] = arr[i] + 1;
    }

    console.log(arr);

    let arr1 = [1, 2, 3, 4, 5, 6];

    arr1.forEach((Element, index) =>  {
        console.log(Element, index);
    });

}