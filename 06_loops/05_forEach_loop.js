// for each loop in jacascript

// array
const coding = ["cpp", "javascript", "solidity", "matlab"];

// for each loop to iterate elements of array
coding.forEach(function (item) {
  console.log(item);
});

// for each loop to iterate elements of array
coding.forEach((value) => {
  console.log(value);
});

// function to use as a callback in foreach loop
const printMe = (item) => {
  console.log(item);
};

// foreach loop
coding.forEach(printMe);

// for each loop to print item index of array and also whole array
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// array of objects
const dataBase = [
  {
    name: "Hammad Ali Khan",
    developer: "solidity",
  },
  {
    name: "Arsalan",
    developer: "python",
  },
  {
    name: "Ahmad Faraz",
    developer: "javascript",
  },
];

// foreach loop to print elements of object in array
dataBase.forEach((item) => {
  console.log(item.name);
});
