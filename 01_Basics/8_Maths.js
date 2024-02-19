//     =++++++++++++++Maths++++++++++++++++++++++=

console.log(Math);
// gives absalute value
console.log(Math.abs(-5));

// variable
const value = 7.3;

console.log(Math.round(value)); //rounds off the value
console.log(Math.ceil(value)); // ceil mean upper value will convert to upper number
console.log(Math.floor(value)); // floor refers to lower value will convert to lower number
console.log(Math.sqrt(value)); // outputs the square root of value

// getting minimum number
console.log(Math.min(1, 2, 3, 4));
// getting maximum number
console.log(Math.max(1, 2, 3, 4));

// getting random number between 0 and 1
console.log(Math.random());
// getting random number between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// variables
const min = 10;
const max = 20;

// getting a random number between 10 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
