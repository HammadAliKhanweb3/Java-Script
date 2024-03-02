// Promise in javascript

// promise
const promiseOne = new Promise((resolve, reject) => {
  // operations we can perform
  // Data base calls, network , cryptography

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThird = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Hammad Ali Khan", email: "hammad@gmail.com" });
  }, 1000);
});

promiseThird.then((user) => {
  console.log(user);
},1000);

const promiseFourth = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Hammad Ali Khan", email: "hammad@gmail.com" });
    } else {
      reject("Error: unexpected error occured");
    }
  }, 1000);
});

promiseFourth
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("expression even resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Hammad Ali Khan", password: "123" });
    } else {
      reject("Error: Js just went wrong");
    }
  }, 1000);
});



// using async await as alternative ofthen and catch 
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


// async await to get data from api
async function getAllusers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllusers();


// fetch funcion itself returns promise 
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
