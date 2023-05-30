
let API = "https://jsonserver-drqy.onrender.com/puma";

let fetchedData = [];
getData();
async function getData() {
  try {
    let res = await fetch(API);
    let data = await res.json();
    console.log("Data From backend", data);
    display(data);
    fetchedData = data;
  } catch (error) {
    console.log(error);
  }
}

let container = document.getElementById("container");

function display(data) {
  container.innerHTML = "";

  data.forEach((el) => {
    let cart = document.createElement("div");
    cart.className = "cart";
    let imgDiv = document.createElement("div");
    let textDiv = document.createElement("div");
    let img = document.createElement("img");
    img.className = "Cimg";
    let brand = document.createElement("h3");
    let salePrice = document.createElement("h3");
    let price = document.createElement("p");

    img.src = el.img;
    brand.innerText = el.brand;
    salePrice.innerText = "Sale Price!!";
    salePrice.style.color = "rgb(49, 74, 172)";
    price.innerText = `$${el.price}`;

    img.addEventListener("click", function () {
      window.location.href = `productDetails.html?id=${el.id}`;
    });

    imgDiv.append(img);
    textDiv.append(brand, salePrice, price);
    cart.append(imgDiv, textDiv);
    container.append(cart);
  });
}
let temp = null;
filter.addEventListener("change", function () {
  if (filter.value === "") {
    display(fetchedData);
  } else {
    temp = fetchedData.filter((el) => {
      if (el.category === filter.value) {
        return true;
      } else {
        return false;
      }
    });
    display(temp);
  }
});

let sort = document.getElementById("sort");

sort.addEventListener("change", function () {
  if (temp === "" && sort.value === "") {
    display(fetchedData);
  } else if (sort.value === "") {
    display(temp);
  } else if (sort.value === "low") {
    let tempSort = temp.sort((a, b) => a.price - b.price);
    display(tempSort);
  } else {
    let tempSort = temp.sort((a, b) => b.price - a.price);
    display(tempSort);
  }
});

let search = document.getElementById("search");
search.addEventListener("input", function () {
  let searchedValue = fetchedData.filter(function (el) {
    if (
      el.brand.toUpperCase().includes(search.value.toUpperCase()) === true
    ) {
      return true;
    } else {
      return false;
    }
  });
  display(searchedValue);
});    

let logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  window.location.href = "home.html";
});

let h2 = document.createElement("h2");
let LSdata = localStorage.getItem("user-details");
if (LSdata === null) {
  LSdata = [];
} else {
  LSdata = JSON.parse(LSdata);
}
let n = LSdata.length - 1;
h2.innerText = LSdata[n].name;
navbar.append(h2);