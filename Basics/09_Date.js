// Date and Time in java script
// Java Script stores Dates as number of milliseconds since 1970

let checkDate = new Date();

console.log(checkDate);
console.log(checkDate.toString());
console.log(checkDate.toLocaleString());

// checking type of Date "Date is an object"
console.log(typeof checkDate);

let myCreatedDate = new Date("01-14-2023");

console.log(myCreatedDate);
// Getting Timestamp
let checkStamp = Date.now();
// Getting Timestamp
console.log(myCreatedDate.getTime());
console.log(checkStamp);
// converting into second
let getInSecond = checkStamp / 1000;
console.log(getInSecond);
// removing decimel
console.log(Math.floor(getInSecond));

console.log(myCreatedDate.getDay());
// Defining object in parameter
let dayOfWeek = checkDate.toLocaleString("default", {
  weekday: "short",
});
console.log(dayOfWeek);
