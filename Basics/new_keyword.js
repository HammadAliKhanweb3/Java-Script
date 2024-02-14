// new keyword in javascript

// function
const newCheck = function (name, otherName) {
  this.name = name;
  this.otherName = otherName;
  this.getcoursecount = () => {
    console.log(`course count is ${otherName}`);
  };
};

const newObject = new newCheck("Hammad", "Arsalan");

console.log(newObject.otherName);

let otherCheck = new newCheck("Hammad", "Ali");

console.log(otherCheck);

console.log(newCheck);
