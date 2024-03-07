// getOwnPropertyDescriptor is used to know the description about properties of objects
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

console.log(Math.PI);

// object
const Change = {
  name: "Lambo",
  price: 250,
  isAvailable: true,
};
console.log(Change);

// making striction on some properties of object
Object.defineProperty(Change, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(Change, "name"));

// for of  loop to print key value pairs of object
for (const [key, value] of Object.entries(Change)) {
  console.log(`Key is: ${key} and the Value: ${value}`);
}
