// Arrays part_2

// array
let AsianCountries = ["Pakistan", "China", "India"];
let Eurpian_Countries = ["England", "Turkey", "Finland"];

// pushing second array in first array
AsianCountries.push(Eurpian_Countries);
console.log(AsianCountries);

// concatinating two Arrays
console.log(AsianCountries.concat(Eurpian_Countries)); 

// concatinating  array elements through spread operator
let newarray = [...AsianCountries, ...Eurpian_Countries]; 
console.log(newarray);

// arrays inside the array
let anotherArray = [1, 2, 3, [4, 5], 6, [1, , 2, 3, [1, 2, 3, [4, 5, 6]]]];

// flat concatinates subarray elements.
console.log(anotherArray.flat(Infinity)); 

// variables
let var1 = "Hammad";
let var2 = "Arsalan";
let var3 = "Faraz";

// Array.of() creates a new array from variables number of arguments
let varArray = Array.of(var1, var2, var3);

console.log(varArray);
console.log(Array.of("Hammad", "Arsalan", "saad"));
console.log(Array.from({ name: "Hammad" })); // interesting
