function setUsername(username) {
  this.username = username;
  console.log("called");
}

// call keyword pass execution context to call context
function UserDetails(username, email, password) {
  setUsername.call(this, username);
  this.email = username;
  this.password = password;
}

const user = new UserDetails("Hammad Ali Khan", "Hammad@gmail.com", 123);

console.log(user);
