// arrow function in javascript

// object to check this keyword
const user = {
  username: "Hammad Ali Khan",
  id: 225500,

  // function to print welcome value
  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
  },
};

user.welcomeMessage();
user.username = "Ali";
user.welcomeMessage();

console.log(this);

// function to check/understand this keyword
function check() {
  let userid = 55;
  console.log(this.userid);
  console.log(this);
}

check();

// arrow function to check/understand this keyword
const checkArrow = () => {
  let anotheruserid = 55;
  console.log(this.anotheruserid);
  console.log(this);
};

checkArrow();

const Check = function Checkit() {
  let userid = 55;
  console.log(this.userid);
  console.log(this);
};

Check();

// arrow function to add two add two numbers
const addTwo= (num1,num2) => {
return num1+num2
}

// implicit return
const addOne = () => ({username:"Zain ul Hassan"})

console.log(addOne());
