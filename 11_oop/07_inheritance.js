// Inheritance in java script

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(this.username);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  Addcourse() {
    console.log(`new course has been added by ${this.username}`);
  }
}

const addDetail = new Teacher("Ahmad Faraz", "ahmad@123", 123);
const addUser = new User("Arsalan Aslam");
addDetail.Addcourse();
addDetail.logMe();

console.log(addDetail);

console.log(addDetail == addUser);
console.log(addDetail instanceof User);
