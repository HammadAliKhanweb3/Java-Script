# DOM Projects

## Projects link
[click here]https://stackblitz.com/@HammadAliKhanweb3/collections/java-script-dom-projects

## Projects code

## 01 Background Switcher
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

```
## 02 BMI Calculator
```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 ||  isNaN(height)) {
    results.innerHTML = "please enter a valid height";
  } else if (weight === "" || weight < 0 ||  isNaN(weight)) {
    results.innerHTML = "please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
