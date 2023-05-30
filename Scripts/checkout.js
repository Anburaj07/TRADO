
let country = document.getElementById("country");
let countryShow = document.getElementById("countryShow");
countryShow.innerText = country.value;
let delivery = document.getElementById("delivery");

delivery.addEventListener("click", function () {
  alert("Details Saved successfully !!");
});
let debit = document.getElementById("debit");
debit.addEventListener("click", function () {
  debit.style.backgroundColor = "#2d2d2d";
  debit.style.color = "white";
});
let buy = document.getElementById("buy");
buy.addEventListener("click", function () {
  alert("Purchase Successfull!!");
  window.location.href="home.html"
});

let logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  window.location.href = "home.html";
});

let R2 = document.getElementById("R2");

let LSData = localStorage.getItem("cart");
if (LSData === null) {
  LSData = [];
} else {
  LSData = JSON.parse(LSData);
}
display(LSData);

// console.log(LSData)

function display(data) {
  R2.innerHTML = "";

  data.forEach((el) => {
    console.log(el);
    let cart = document.createElement("div");
    cart.className = "cart";
    let textDiv = document.createElement("div");
    textDiv.className = "textDiv ";
    let img = document.createElement("img");
    let brand = document.createElement("p");
    brand.className = "brand";
    let price = document.createElement("p");
    let quantity = document.createElement("p");

    img.src = el.img;
    price.innerText = `$${el.price}`;
    brand.innerText = el.brand;
    quantity.innerText = `Qty:${el.quantity}`;

    textDiv.append(price, brand, quantity);
    cart.append(img, textDiv);
    R2.append(cart);
  });

  let R1 = document.getElementById("R1");
  let totalItems = document.createElement("h1");
  totalItems.className = "totalItems";
  let Items = document.createElement("h1");

  totalItems.innerText = `${LSData.length}`;
  Items.innerText = "ITEMS";
  R1.append(totalItems, Items);

  let cartTotal = document.getElementById("Subtotal");
  let sum = 0;
  for (let i = 0; i < LSData.length; i++) {
    sum += LSData[i].quantity * LSData[i].price;
  }
  cartTotal.innerText = `$${sum}`;
  let Delivery = document.getElementById("Delivery");
  Delivery.innerText = `$${7.0}`;

  let totalToPay = document.getElementById("totalToPay");
  totalToPay.innerText = `$${sum + 7.0}`;
  //   payment.append(cartTotal);
}