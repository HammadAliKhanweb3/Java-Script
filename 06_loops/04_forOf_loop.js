// for of loop in javascript

// array
const arr = [1, 2, 3, 4, 5];

// for of loop to return the elements of array
for (const num of arr) {
  console.log(num);
}

// string
const greetings = `hello world`;

// for of loop to return the elements of string
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//for of loop to return string elements without empty spaces
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(`Each char is ${greet}`);
}

//for of loop to return string elements before the detection of empty space
for (const greet of greetings) {
  if (greet == " ") {
    break;
  }
  console.log(`Each char is ${greet}`);
}

// Map in javascript

const map = new Map();

map.set("pk", "Pakistan");
map.set("Sa", "Saudi Arabia");
map.set("Ps", "Palestine");
map.set("In", "India");

console.log(map);

// for of loop to print key value pairs in map
for (const [key, value] of map) {
  console.log(key, ":", value);
}
