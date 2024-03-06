// classes in javascript

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptedPassword() {
    return `${this.password}ABC`;
  }
}
let userName = new User("Rana Osama", "Osama@gmail.com", 123);

console.log(userName.encryptedPassword());

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

let username = new user("Hammad Ali Khan", "hammad@gmail.com", 123);

console.log(`${username.email}`);

user.prototype.changeName = function () {
  return `${this.username.toUpperCase()}`;
};
let checkMethod = username.changeName();

console.log(`${checkMethod}`);
