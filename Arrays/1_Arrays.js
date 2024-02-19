// Array in java script
// Array is a colllection of data in single variable
// Java script Arrays are cahngeable

// array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArr = new Array("Hammad , 1 ,,2 "); // another way of declaring array

console.log(myArr);

// adds element on the last index of the arrary
arr.push(10);
console.log(arr);

// Removes last index of the array
arr.pop();

console.log(arr);

// checking wether 9 is include in array or not
console.log(arr.includes(9));

// checking element on the 9th index of the array
console.log(arr.indexOf(9));

// adds element on the first index of the array and shift all elements into next index which consumes time
arr.unshift(5);
console.log(arr);

// Removes element form the first index of the array
arr.shift();
console.log(arr);

// returns an arary as a string default speparotar is "," any sperator can be used and doesnot modifies the original array
let newarray = arr.join();

console.log(arr);

// returns a part of array and doesnot modidifies the original array
console.log(arr.slice(1, 3));

// add or remove an element of an array and modifies the original array
console.log(arr.splice(1, 2));

console.log(arr);

//reverse the elements of array
console.log(arr.reverse());
