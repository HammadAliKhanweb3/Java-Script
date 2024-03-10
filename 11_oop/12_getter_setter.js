// Using getter and setter in functionn 

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password} is ok`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const NewUser = new User("check@gmail.com", 123);
console.log(NewUser.email);
console.log(NewUser.password);
