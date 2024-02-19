// Scope in javascript

// variables
let a = 100;
const b = 200;
var c = 300;

// conditional statement 
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Innner", a);
}

console.log(c);

// function inside function
function first() {
  const user = "Hammad Ali";

  function second() {
    const name = "400";
    console.log(user);
  }

  console.log(name);
}

first();

// ************Interesting***************

//calling function
addone(10);

//function
function addone(num) {
  return num + 1;
  console.log(num);
}

//  addtwo(9) it will thow an error
function addtwo(num) {
  return num + 2;
}
