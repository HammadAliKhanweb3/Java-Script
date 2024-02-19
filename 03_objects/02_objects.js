//objects second part

// constructor method to declare object
const tinderUser = new Object();

// nested objects
const object = {
  name: "Hammad",
  id: 1,
  course: "Math",
  subjects: {
    english: true,
    math: false,
    DSA: {
       1: "stack",
      2: "heap",
    },
  },
};

// reitriving value from nested object
console.log(object.subjects.DSA[1]);

const object2 = {
  name: "Saad",
  id: 112,
  course: "Computer Science",
};

// concatinataing two objects
const addObjects = Object.assign({}, object, object2); // {} => target and objects are source
console.log(addObjects);

// spread method two combine two objects
const sumObjects = { ...object, ...object2 };
console.log(sumObjects);
