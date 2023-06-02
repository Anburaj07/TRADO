let productId = null;
const urlParams = new URLSearchParams(location.search);
// console.log(location.search);
for (const [key, value] of urlParams) {
  if (key === "id") {
    productId = value;
  }
}
let API = `https://jsonserver-drqy.onrender.com/puma/${productId}`;

getDetailsOfProduct();
async function getDetailsOfProduct() {
  try {
    let res = await fetch(API);
    let data = await res.json();
    // console.log("Detail of product", data);
    display([data]); //Data in object format
  } catch (error) {
    console.log(error);
  }
}

let LSData = localStorage.getItem("cart");
if (LSData === null) {
  LSData = [];
} else {
  LSData = JSON.parse(LSData);
}

let fetchedData = [];

let container = document.getElementById("container");

function display(product) {
  container.innerHTML = "";

  product.forEach((el) => {
    let imgDiv = document.createElement("div");
    imgDiv.className="imgDiv"
    let textDiv = document.createElement("div");
    let img = document.createElement("img");
    img.className = "Cimg";
    let salePrice = document.createElement("h3");
    let brand = document.createElement("h3");
    let price = document.createElement("p");
    let addToCart = document.createElement("button");
    addToCart.className = "addcart";
    let bag_below = document.createElement("img");
    bag_below.className="Cimg";
    bag_below.id="bag";

    img.src = el.img;
    brand.innerText = el.brand;
    salePrice.innerText = "Sale Price";
    salePrice.style.color = "rgb(49, 74, 172)";
    price.innerText = `$${el.price}`;
    addToCart.innerText = "Add to Cart";
    bag_below.src = "./images/bag_below.PNG";

    addToCart.addEventListener("click", function () {
      if (checkAvail(el)) {
        alert("Product Already in Cart");
      } else {
        LSData.push({ ...el, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(LSData));
        alert("Product Added To Cart");
      }
    });

    function checkAvail(el) {
      for (let i = 0; i < LSData.length; i++) {
        if (el.id === LSData[i].id) {
          return true;
        }
      }
      return false;
    }

    imgDiv.append(img);
    textDiv.append(brand, salePrice, price, addToCart, bag_below);
    container.append(imgDiv, textDiv);
  });
}
let women = document.getElementById("women");
women.addEventListener("click", function () {
  window.location.href = "women.html";
});
let men = document.getElementById("men");
men.addEventListener("click", function () {
  window.location.href = "products.html";
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

