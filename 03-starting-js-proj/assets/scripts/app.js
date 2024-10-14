// IMPORT AND EXPORT

// import {
//   apiKey,
//   abc as content, // alias
// } from './util.js';

// import apiKey from './util.js'; // with default export

import * as util from './util.js'; // with named exports

console.log(util.apiKey, util.abc);

// VARIABLES
let userMessage = "hello world!!";

console.log(userMessage);

// OPERATORS
console.log("hello" + "world");
console.log(10 === 5);

// FUNCTIONS
function greet(userName, message = "Hello!") {
  console.log(userName, userMessage);
}
function createGreeting(userName, message = "Hello!") {
  return "Hi, I am" + userName + " " + message;
}

greet("Max", "hello!");
console.log(createGreeting("Max", "hello!"));

const combine = (inp1, inp2, inp3) => {
  return inp1 * inp2 / inp3;
};

combine(1, 2, 3);
