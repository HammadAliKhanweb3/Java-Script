// ++++flasy values ++++
// false,0,-0,"",BigInt 0n,null,undefined,NaN

// ++++truthy values ++++
// "0"," ",[],{},function () {},null,undefined,NaN

// variable
const mail = "hammad123@gmail.com";
// conditional statement
if (mail) {
  console.log(` ${mail} just logged in`);
} else {
  console.log("user Don't have access");
}

// empty array
const arr = [];

if (arr) {
  console.log(`welcome`);
} else {
  console.log("user Don't have access");
}

// conditional statement to check compare array's length
if (arr.length == 0) {
  console.log("array is empty");
}

// empty object
const userObject = {};

if (Object.keys(userObject).length == 0) {
  console.log("array is empty");
}

let value;

// Nullish coalescing operator (??) : null undefined
value = 10 ?? 15;
value = null ?? 10;
value = undefined ?? 55;

console.log(value);

// ternary operator
// condtion ? true:fale

let number = 100;

// checking condition using ternary operator
number < 100
  ? console.log("number is less than 100")
  : console.log("number is greater than 100 ");
