// Objects in javascript
// We can declare objects in two ways 1. constructor and 2. literal
// singleton is created when we declare object by constructor method

// In javascript objects are king if you understand objects you understand javasript
// objects are key value pair
// In javasript everything is almost object we can make variables objects by simply adding new keyword
// all javascript values except premitive are objects
// we can add any value in objects i.e arrays, objects, number , string.....

// symbol
let newsym = Symbol("Ahad");

// literal method of declaring object
let obj = {
  name: "Hammad Ali Khan",
  id: 225204,
  courses: [1, 2, 3, 4, 5],
  new: function () {
    console.log("kya chal rha hay");
  },
  [newsym]: "Bilal",
};

console.log(obj);
// making changes in object
obj.id = 30;

// accessing properties of object which mostly we use
console.log(obj.name);

// 2nd way of accessing properties of object we use in
console.log(obj["id"]);
console.log(obj["courses"]);
console.log(obj["new"]);
console.log(obj[newsym]);

// checking the type
console.log(typeof obj.newsym);

// adding function in object
obj.greeting = function () {
  console.log(`how are you,${this.name}`); // string interpulation
};

console.log(obj.greeting());

Object.freeze(obj)       // making object immutable
