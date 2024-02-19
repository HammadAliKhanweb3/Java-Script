// Functions in java script
// the code that you have written you close that code in a package and you can use that code in
//you programm where you want.

// function to add two numbers
function addNumbers(num1, num2) {
  let add = num1 + num2;

  console.log(add);

  return add;
}

// calling a function and storing in a variable
const res = addNumbers(3, 5);

console.log(`Result: ${res}`);

// function to print username
function LoginUserName(username = "Hammad") {
  if (!username) {
    return "Please enter a username";
  }

  return `${username} just logged in`;
}

console.log(LoginUserName("Hammad Ali Khan"));

// fucntion to calculate totalcartprice
function calculateCartprice(value1, value2, ...num) {
  return num;
}

const TotalPrice = calculateCartprice(100, 200, 300, 4000);

console.log(TotalPrice);

// object
const obj = {
  item: "Fish",
  price: 1000,
};

// function to return elements of object
function returnObject(anyobject) {
  return `Item is: ${anyobject.item} and price is:${anyobject.price}`;
}

// storing value of returnobject function in a variable
let objectitems = returnObject(obj);
console.log(objectitems);

const objectitem = returnObject({
  item: "iphone",
  price: 2000,
});
console.log(objectitem);

// array
const arr = [1, 2, 3, 4, 5];

// function to return the second element on the second index of array
function handleArray(getArray) {
  return getArray[2];
}

const array = handleArray(arr);

console.log(array);

const Array = handleArray([1, 2, 3, 4, 5]);

console.log(Array);
