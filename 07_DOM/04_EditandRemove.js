<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edit and Remove Element  DOM</title>
    <style>
      .background {
        background-color: #212121;
        color: aquamarine;
        padding: 30px;
      }
      .language {
        color: chartreuse;
      }
    </style>
  </head>
  <body class="background">
    <h1>Learning javaScipt</h1>
    <ul class="language">
      <li>javaScipt</li>
    </ul>
    <script>
      function addLanguage(langname) {
        const li = document.createElement("li");
        li.innerHTML = `${langname}`;
        document.querySelector(".language").appendChild(li);
      }
      addLanguage("python");

      function addpotiLanguage(langname) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(langname));
        document.querySelector(".language").appendChild(li);
      }

      addpotiLanguage("solidity");

      // edit
      const firstli = document.querySelector("li:first-child");
      firstli.innerHTML = "Rust";
      const newli = document.createElement("lli");
      newli.textContent = "typescipt";
      firstli.replaceWith(newli);

      const lastli = document.querySelector("li:last-child");
      lastli.outerHTML = "<h1>swift<h1/>";

      // remove
      const removeElement = document.querySelector("li:nth-child(2)");
      removeElement.remove();
    </script>
  </body>
</html>
