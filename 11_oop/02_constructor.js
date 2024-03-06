function User(username, email, password) {
  this.username,
    this.email,
    this.password,
    (this.greetings = function () {
      console.log(`Welcome ${this.username}`);
    });
  return this;
}
// new keyword makes new instance
const userOne = new User("Hammad Ali Khan", "hammad@gmail.com", "123");
const userTwo = new User("Arsalan Aslam", "arsalan@gmail.com", "000");

console.log(userOne);
// constructor is the referecne to itself
console.log(userTwo.constructor);

// checking wether userOne and userTwo are instance of User or not
console.log(userOne instanceof User);
console.log(userTwo instanceof User);
