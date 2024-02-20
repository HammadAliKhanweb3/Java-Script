// control flow in javascript

// variables
const iserLoggesin = true;
const temperature = 40;

// conditional statement to check temperature is greater than 50 or not
if (temperature === 40) {
  console.log("temperature is less than 50");
} else {
  console.log("temperature is greater than 50");
}

console.log("Execute");

// We can also use these sumbols for comparison
// <,>,<=,>=,==,!==

const score = 200;

// conditional statement to check scope
if (score > 200) {
  let power = "fly";
  console.log(`User power is ${power}`);
}

// power variable can't be accessed because it is declares inside the if statement
//console.log(`User power is ${power}`);

// not recommended
if (score > 200)
  console.log("score is greater than 200"), console.log("continue");

// nested if else
const value = 1000;
if (value > 100) {
  console.log("value is greater than 50");
} else if (value > 500) {
  console.log("value is greater than");
} else if (value > 1000) {
  console.log("value is greater than 1000");
}

//  boolean variables
const userloggedin = true;
const debitcard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;

// if statement to execute and operator
if (userloggedin && debitcard && 10 == 10) {
  console.log("allow to buy the course");
}

// if statement to execute and operator
if (loggedInfromEmail || loggedInfromGoogle) {
  console.log("allow to buy course");
}
