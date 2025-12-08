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

