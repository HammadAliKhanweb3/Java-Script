const endDate = "27 March 2024 5:37 PM";

document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");

const colck = () => {
  const endTime = new Date(endDate);
  const now = new Date();
  const difference = (endTime - now) / 1000;
  if (difference < 0) return;
  inputs[0].value = Math.floor(difference / 3600 / 24);
  inputs[1].value = Math.floor(difference / 3600) % 24;
  inputs[2].value = Math.floor(difference / 60) % 60;
  inputs[3].value = Math.floor(difference) % 60;
};

colck();
setInterval(() => {
  colck();
}, 1000);
