setTimeout(() => {
  console.log("SetTimeout Function");
}, 2000);

console.log("Hello World");

// callback  Hell
// nested callbacks
setTimeout(() => {
  console.log("SetTimeout Function 1");
  setTimeout(() => {
    console.log("SetTimeout Function 2");
    setTimeout(() => {
      console.log("SetTimeout Function 3");
      setTimeout(() => {
        console.log("SetTimeout Function 4");
        setTimeout(() => {
          console.log("SetTimeout Function 5");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

// promises
// 3. State
// 1. Pending
// 2. fulfilled (res)
// 4. rejected(rej)

// promise Pass a callback function with two parameters

let  myPromise = new Promise((res, rej)=> {
    let  marks = 40;
    if (marks >= 60) {
        res("Student is passed");
    } else {
        rej("Student is failed");
    }
})


// Fetch an PI
let fetchData = () => {
    try {
        const response = fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data = await response.json();
        console.log("Value is", data);
    } catch (error) {
        console.log("Error", error);
    }
}

let localDat = JSON.parse(localStorage.getItem("responseData")) || [];

if(localDat.length <= 0) {
    fetchData();
}