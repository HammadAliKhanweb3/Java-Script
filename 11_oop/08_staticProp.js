class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(this.username);
  }
  static createId() {
    return 321;
  }
}
class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Hammad = new User("Hammad Ali Khan");

// here we are getting error because createId is static
//console.log(Hammad.createId());

const teacher = new Teacher("Hamayun", "123@gmail.com");
teacher.logMe();
// here we are getting error because createId is static
//console.log(teacher.createId);
