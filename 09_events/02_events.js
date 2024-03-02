//  java script is a sequentialy run language
//  there is some exceptions in javascript which invokes on some activity
//  event listener gives propagation

// this is not a good approach
// document.querySelector("#owl").onclick = () => {
//   alert("owl clicked");
// };

// // good practice
document.querySelector("#owl").addEventListener("click", (e) => {
  console.log("owl clicked");
});

// capturing and bubbling
// by defalut bubbling is used but in some scenarios we use event capturing

// event propagation

// example of bubbling tracking elements inside to outside
document.getElementById("images").addEventListener("click", (e) => {
  console.log("images captured");
});

document.getElementById("owl").addEventListener("click", (e) => {
  console.log("owl captured");
});

// example capturing mode means tracking element from top to bottom
document.getElementById("images").addEventListener(
  "click",
  (e) => {
    console.log("images captured");
  },
  true
);

document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log("owl captured");
  },
  true
);

// stoping propagation
document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log("owl captured");
    e.stopPropagation();
  },
  false
);

// prevent default
// prevent default used to prevent default behavior of an event from occuring
document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    e.preventDefault;
    e.stopPropagation();
    console.log("owl captured");
  },
  false
);

document.getElementById("images").addEventListener("click", (e) => {
  console.log(e.target.tagName);

  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});

//removeIt.parentNode.removeChild(removeIt)
