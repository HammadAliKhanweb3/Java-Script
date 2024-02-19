// objects 2nd part

let obj = {
  name: "Hammad",
  secondname: "Ali Khan",
};

//object destructuring
let { secondname } = obj;
console.log(secondname);

// object destructuring
let { name: n } = obj;
console.log(n);

// example of data come from backend json format
let api = [
  {
    name: "Hammad",
    course: "JavaScript",
    courseFee: "1000",
  },
  {
    name: "Hammad",
    course: "JavaScript",
    courseFee: "1000",
  },
  {
    name: "Hammad",
    course: "JavaScript",
    courseFee: "1000",
  },
];

//                       { json format} just for understanding
//         "name":"Hammad",
//         "course":"JavaScript",
//         "courseFee":"1000"
//     }
