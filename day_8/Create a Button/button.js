var clicks = 0;
var clickButton = document.getElementById('btn');
clickMeButton.innerHTML = clicks.toString();

function onClick() {
  clicks += 1;
  document.getElementById("btn").innerHTML = clicks;
};