// immediately invoked function

// for avoiding global scope pollution we use IIFE

// name IIFE function
(function iife(name) {
  console.log(`Data Base connected `);
})("Hammad Ali Khan");

// simple IIFE function
(() => {
  console.log(`Data Base connected Two`);
})();

