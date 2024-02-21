// for loop in javascript

// simple for loop to print 1 to 10 numbers
for (let i = 1; i <= 10; i++) {
  let element = i;
  console.log(element);
}

// nested for loop to print 1 to 10 table
for (let i = 1; i <= 10; i++) {
  console.log(` ${i}'s Table`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j}=` + i * j);
  }
}

//  Array
let arr = ["Hammad", "Usman", "Ali", "Ahmad"]; 

// break in for loop
for (let i = 0; i <= arr.length; i++) {
  let element = arr[i];
  if (i == 3) {
    console.log("3 detected");
    break;
  }
  console.log(`value of ${i} index is ` + element);
}

//continue in for loop
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 detected");
    continue;
  }
  console.log(`value of is ${i} `);
}
