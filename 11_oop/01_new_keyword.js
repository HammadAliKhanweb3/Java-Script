// new keyword in javascript

function multiply_five(num) {
  return this.num * 5;
}

multiply_five.power = 10;
console.log(multiply_five.power);
console.log(multiply_five.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.incriment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Name is ${this.username} and score is ${this.score}`);
};

const first = new createUser("Ali", 99);
const second = new createUser("Hassan", 49);

second.printMe();
 first.incriment();
 first.printMe();
