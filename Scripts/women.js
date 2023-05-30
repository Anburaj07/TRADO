let navbar = document.getElementById("navbar");
let h2 = document.createElement("h2");
let logo = document.getElementById("logo");
let utility = document.getElementById("utility");
let formal = document.getElementById("formal");
let modest = document.getElementById("modest");
let shoes = document.getElementById("shoes");    

let women = document.getElementById("women");
women.addEventListener("click", function () {
  window.location.href = "women.html";
});
let men = document.getElementById("men");
men.addEventListener("click", function () {
  window.location.href = "products.html";
});

logo.addEventListener("click", function () {
  window.location.href = "home.html";
});

let LSdata = localStorage.getItem("user-details");
if (LSdata === null) {
  LSdata = [];
} else {
  LSdata = JSON.parse(LSdata);
}
let n = LSdata.length - 1;
h2.innerText = LSdata[n].name;
navbar.append(h2);