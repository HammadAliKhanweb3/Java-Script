// Using getter and setter in class

// class
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password} Protected `;
  }
  set password(value) {
    this._password = value;
  }
}
const Hammad = new User("hammad@gmail.com", 321);
console.log(Hammad.email);

const setPassword = new User("arsalan@gmail.com", 123);
console.log(setPassword.password);
