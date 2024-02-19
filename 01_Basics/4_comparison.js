// comparison in javascript

// comparison to check which one is greater
console.log(2 > 2);
// == check only condition
console.log(2 == 2);
// === check condition and datatype also
console.log(2 === 2);

console.log(2 != 3);

// automatically convert string to number and returns value as true or false
console.log("2" > 1);
console.log("9" > 3);

// strict check if datatype is not same it will give false value
console.log("4" === 4);

// while comparing "datatypes" should be same otherwise it my happen the predicted value not return

// comaparison convert null to a number a treats null as a zero
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// we use usally Don't use these null and undefined comparison for code clearity and for avoiding confusion
// undefined gives false value in every comparison
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
