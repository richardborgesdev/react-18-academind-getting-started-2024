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

// OBJECTS
const user = {
  name: "Max",
  age: 30,
  greet() {
    console.log("Hello");
    console.log(this.age);
  },
};

console.log(user);

class User {
  constructor(name, age) {
    this.name = "Max";
    this.age = 30;
  }

  greet() {
    console.log("Hello");
  }
}

const user1 = new User("Max", 30);
user1.greet();

// ARRAYS
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[1]);

hobbies.push("Programming");
console.log(hobbies);

const index = hobbies.findIndex((hobby) => hobby === "Cooking");
console.log(index);

const editedHobbies = hobbies.map((hobby) => hobby + '!');
console.log(editedHobbies);

const hobbiesObject = hobbies.map((hobby) => ({text: hobby}));
console.log(hobbiesObject);

function transformToObjects(numberArray) {
  return numberArray.map(number => ({val: number}));
}
