// Javascript is dynamically type Language

// ********Premetive Datatypes********
// for Prmetive datatypes we only have to give Data not location (pass by value )
// 7 Premetive types: String,Number,Boolean,null,undefined,Symbol,BigInt

// number
const value = 100;
// no special datatype for decimel value it is also a number
const scoreValue = 100.3;
// Boolean
const Loggedin = false;
// null
const tempreture = null;

// undefined means empty
let userEmail;
// symbol is used for uniquness
const id = Symbol(111); 
const SecondID = Symbol(111);
// conparing id and secondid we assigned same value for both ids but result is false because symbol gives unique value
console.log(id == SecondID);

// Bigint
//Bigint is used for big value for Bigint we add "n" at the end of value

const num = 123456543223456798765432222222234n; 

// ***********Reference DataTypes(Non primitive)************
// For reference datatypes we have data and location also (
//reference can be be directly allocated in memory)

// Reference datatypes are Arrays,Objects,Functions

// Array
const arr = ["Hammad", " Arsalan", "Faraz", "Ali"]; 

 // object "in javascript objects are key pair values"
// object
const obj = {
  value: "HAmmad",
  seconfValue: "Arsalan",
};

// function (storing function in a variable)
const myfuncion = function ham() {
  
  console.log("Hello");
};
// checking the type variable
console.log(typeof myfuncion);

// --------------Memory-----------------//
//*****stack*****
//stack=>(premetive datatypes stores in stack) when we use variable stored in stack
//we get copy of value means changes occurs in copy
//*****heap******
//heap=>(reference datatytpes stores in heap) when we use reference datatype stored in stack
//we get reference of value means changes occurs in original value
