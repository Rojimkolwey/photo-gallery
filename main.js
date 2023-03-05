const linkDiv = document.getElementById("active");

linkDiv.addEventListener("mouseover", function () {
  linkDiv.style.backgroundColor = "#333";
  linkDiv.style.color = "#aba6a6";
});
linkDiv.addEventListener("mouseout", function () {
  linkDiv.style.backgroundColor = "#ffffff";
  linkDiv.style.color = "#5e4d3b";
});
