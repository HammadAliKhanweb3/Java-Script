// **Object Oriented programming in Javascript**
// oop is a programming pradym

// **objects**
//object is a collection of properties and methods

const user = {
  // Properties
  username: "Hammad Ali KHan",
  id: 10,
  signedIn: true,

  // method
  getUserdetails: function () {
    console.log("Got user detail");
    
    console.log(`username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.getUserdetails());

// this keyword is used for current context
console.log(this);
