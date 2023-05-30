
let navbar = document.getElementById("navbar");
let h2 = document.createElement("h2");
let logo = document.getElementById("logo");
let puma = document.getElementById("puma");
let sznil = document.getElementById("sznil");
let shirts = document.getElementById("shirts");
let shoes = document.getElementById("shoes");    

logo.addEventListener("click", function () {
  window.location.href = "home.html";
});

puma.addEventListener("click", function () {
  window.location.href = "puma.html";
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