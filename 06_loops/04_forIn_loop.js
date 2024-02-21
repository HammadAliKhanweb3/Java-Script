// for in loop in javascript

const Universities = {
  Au: "Air Uinversity",
  Giki: "Ghulam Ishaq Khan",
  Nust: "National University of science and technology",
};

// for in loop to iterate key value pairs of object

for (const key in Universities) {
  console.log(`${key} means ${Universities[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// Map 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for in loop to iterate 
for (const key in map) {
    console.log(key);
}
