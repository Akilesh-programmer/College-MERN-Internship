console.log(a);
var a = 10;
console.log(a);

let b = 20;
b = 130;
console.log(b);

function namedFunc() {
  console.log("Named function called");
  console.log("Named function called");
  console.log("Named function called");
}

namedFunc();


let funcExp = function () {
  console.log("Function Expression Called");
};

funcExp();

let arrow = () => {
  console.log("Arrow Function called");
};

