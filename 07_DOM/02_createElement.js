<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body style="background-color: #212121; color: aliceblue">
    <div class="parent">
      <div class="day">Monday</div>
      <div class="day">Tuesday</div>
      <div class="day">Wednesday</div>
      <div class="day">Thursday</div>
    </div>
  </body>
  <script>
    // DOM manipulation

    // accessing parent div and childrens of parent
    const parent = document.querySelector(".parent");
    console.log(parent);
    console.log(parent.children);
    console.log(parent.children[2].innerHTML);

    // for loop to select innerhtml of div 
    for (let i = 0; i < parent.children.length; i++) {
      console.log(parent.children[i].innerHTML);
    }

    // changing clolor
    parent.children[1].style.color = "yellow";
    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);

    // triversing
    const dayone = document.querySelector(".day");
    console.log(dayone);
    console.log(dayone.parentElement);

    // accessing node elements
    console.log("Nodes:", parent.childNodes);
    console.log(dayone.nextElementSibling);
  </script>
</html>
