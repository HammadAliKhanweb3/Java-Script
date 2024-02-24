# Background color switcher Projects Related to DOM

## Projects link
[click here]https://stackblitz.com/edit/stackblitz-starters-wxkeo5?file=01_index.html

## Projects code
 
```javascript
const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((button) => {
  
  button.addEventListener("click", function (e) {

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

  });
});
