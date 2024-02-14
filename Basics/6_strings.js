// Strings in javascript

//variables "strings"
const name = "Hammad";
const repoCount = "1";

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaring a sring
const Name = new String(`Hammad`);
console.log(Name);

// checking speciefic charater at string
let character = name.at(-1);

// checking  charater at 3 index of string
console.log(Name.charAt(3));
console.log(character);

// retrieving caharacter on specific index within a string
const charatstring = name.charAt(-1);
console.log(charatstring);

// returning the unicode of character on 3rd index
let getunicode = name.charCodeAt(3);
console.log(getunicode);

// returning the unicode of character on 2nd position
let getPointAt = name.codePointAt(2);
console.log(getPointAt);

// adding two strings
let concatString = name.concat(repoCount);
console.log(concatString);

// checking length of string
let stringLength = concatString.length;
console.log(stringLength);

let text = "hammad,faraz,arsalan";
let length = text.length;
console.log(length);

// slicing string from 0 index to 12 slicing mean extracting string
let sliceString = text.slice(0, 12);
console.log(sliceString);

// same as slice The difference is that start and end values less than 0 are treated as 0 in

let subString = text.substring(-20);
console.log(subString);
// it is also like Slice difference id second parameter specifiecs extracted part
let stringStr = text.substr(0, 5);
console.log(stringStr);

// string
let x = "HAMMAD ALI KHAN";

// converting all element of string into lower case
let y = x.toLowerCase();

// converting all element of string into upper case
let z = y.toUpperCase();
console.log(y);
console.log(z);

// removing the spaces from both beginning and end
let a = "      Faraz         ";
let b = a.trim();
console.log(b);

// removing spaces from left side
let trimLeft = a.trimLeft();
console.log(trimLeft);

// removing spaces from right side
let trimRight = a.trimRight();
console.log(trimRight);

// adding character at the end of the string
let v = "5";
let c = v.padStart(11, "1234567899");
console.log(c);

// adding character at the end of the string
let d = v.padEnd(7, "Hammad");
console.log(d);

let NameIs = "Ali";
// converting into string into html tags
let anc = NameIs.anchor();
console.log(anc);
