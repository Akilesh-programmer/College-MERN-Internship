// 1Create Array From Arguments
// Q1:
// Create a function createArray that takes 3 arguments and returns an array containing those three values.
// Run the function and print the result.
// Dynamic Number of Arguments

// Push Only Strings
// Q2:
// Create a function stringOnly that accepts any number of arguments, but returns an array containing only the arguments that are strings.
// Create Array of Squares
// Q3:
// Create a function squareNumbers that accepts numbers as arguments and returns an array of each number squared.
// Example:
// squareNumbers(2, 3, 4) → [4, 9, 16]
// Filter Even Numbers
// Q4:
// Create a function getEvenNumbers that accepts numbers as arguments and returns an array containing only even numbers.
// Create Array of Names
// Q5:
// Create a function collectNames that accepts name arguments and returns an array of names in uppercase.
// Example:
// collectNames("sid", "raj") → ["SID", "RAJ"]
// Convert Arguments Into Objects
// Q6:
// Create a function makeUser that takes 3 arguments: name, age, city.
// Return an array containing 1 object like:
// [
//   { name: "Sid", age: 22, city: "Delhi" }
// ]
// Mix values, return only numbers

// Q7:
// Create a function addTen that takes any number of arguments and returns an array where each number is increased by 10.
// Function with default values
// Q8:
// Create a function createFruitArray where if no arguments are passed, it returns ["apple", "banana"].
// If arguments are passed, return those arguments as an array.

// Q1
function createArray(arg1, arg2, arg3) {
  return [arg1, arg2, arg3];
}

let result = createArray(10, "hello", true);
console.log(result);

// Q2
function stringOnly(...args) {
  return args.filter((arg) => typeof arg === "string");
}
result = stringOnly(1, "apple", true, "banana", 42, "cherry");
console.log(result);

// Q3
function squareNumbers(...numbers) {
  return numbers.map((num) => num * num);
}

result = squareNumbers(2, 3, 4);
console.log(result);

// Q4
function getEvenNumbers(...numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
result = getEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result);

// Q5
function collectNames(...names) {
  return names.map((name) => name.toUpperCase());
}

result = collectNames("sid", "raj", "anna");
console.log(result);

// Q6
function makeUser(name, age, city) {
  return [
    {
      name: name,
      age: age,
      city: city,
    },
  ];
}
result = makeUser("Sid", 22, "Delhi");
console.log(result);

// Q7
function addTen(...args) {
  return args.filter((arg) => typeof arg === "number").map((num) => num + 10);
}
const resultQ7 = addTen(1, "a", 5, true, 10);
console.log(resultQ7);

// Q8
function createFruitArray(...fruits) {
  if (fruits.length === 0) {
    return ["apple", "banana"];
  } else {
    return fruits;
  }
}
result = createFruitArray();
console.log(result);

console.log(typeof(result))

let = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter: it will work on Truthy Values
// let b = a.filter((ele, index) => {
//     return index > 4;
// });

// console.log(b);


// Reduce: return a single value
// let c = a.reduce((acc, el, index) => {
//     console.log(acc, el);

//     return acc.el;
// }, 200);

// console.log(c);

let name = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

let b = arr.map((name) => {
    return name.username;
});

console.log(b);

let c = arr
    .filter((el) => {
        // console.log(el);
        return el.id % 2 === 0;
    })
    .map((el)=> {
        el.name
    })
    .join("");
console.log(c);