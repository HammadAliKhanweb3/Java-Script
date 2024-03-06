// prototype in javascript

// Array
let myFriends = ["Faraz", "Arsalan"];

// object
const powers = {
  Faraz: "Condident",
  Arsalan: "Calm",
  getArsalanPower: function () {
    console.log(`Arsalan power is ${this.Arsalan}`);
  },
};

// adding method to object
Object.prototype.Hihammad = function () {
  console.log("Hammad is present in all objects");
};

powers.Hihammad();
myFriends.Hihammad();

Array.prototype.HeyHammad = function () {
  console.log("Hammad says Salam");
};

myFriends.HeyHammad();

// // inheritance

const user = {
  username: "Hammad Ali Khan",
  id: "124",
};

const Teacher = {
  makevideo: true,
};
const Teachingsupport = {
  isAvialble: true,
};
const TAsupport = {
  assignmet: "Java script",
  fullTime: true,
  __proto__: Teachingsupport,
};
Teacher.__proto__ = user;

console.log(TAsupport.isAvialble);

// modern syntax

Object.setPrototypeOf(Teachingsupport, Teacher);

let name = "Hammad Ali Khan  ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
};

name.trueLength();
