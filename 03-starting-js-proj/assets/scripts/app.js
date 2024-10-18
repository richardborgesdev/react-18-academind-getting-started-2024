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

// DESTRUCTURING
const userNameData = ["Max", "Schwrzmüller"]

// const firstName = userNameData[0];
const [firstName, lastName] = userNameData;
console.log(firstName, lastName);

const userDestructuring = {userName: "Max", age: 30};
const { nameAlias: userName, age } = userDestructuring;
console.log(nameAlias, age);

// SPREAD OPERATOR
const newHobbies = ["Programming"];
const mergedHobbies = [...hobbies, ...newHobbies];

const extendedUser = {
  isAdmin: true,
  ...userDestructuring
}

// CONTROL STRUCTURES
const password = prompt("Enter password");

if (password === 'Hello') {
  console.log('Hello works');
} else if (password === 'hello') {
  console.log('hello works');
} else {
  console.log('Access not granted.');
}

for (const hobby of hobbies) {
  console.log(hobby);
}

// MANIPULATING DOM WITHOUT REACT
const list = document.querySelector('ul');
list.remove();

// FUNCTIONS AS VALUES
function handleTimeOut() {
  console.log('Timed out!');
}

const handleTimeOut2 = () => console.log('Timed out 2!');

setTimeout(handleTimeOut, 2000);
setTimeout(handleTimeOut2, 2000);
setTimeout(() => console.log('Timed out 3!'), 2000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log('Hello!'));

// FUNCTIONS INSIDE FUNCTIONS
function init() {
  function greetInside() {
    console.log('Hello from inside!');
  }

  greetInside();
}

init();

// PRIMITIVE VS REFERENCE TYPES
let userMessage2 = 'Hello!';
userMessage2 = userMessage2.concat('!!!'); // creates a new string

hobbies.push('swimming'); // modifies the original array

const abc = [1,2,3];
// abc = []; // can't be overwritten
abc.push(4); // can be modified

let abc2 = [1,2,3];
abc2 = []; // can be overwritten
abc2.push(4); // can be modified
