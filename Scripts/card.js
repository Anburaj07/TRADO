    // let cartTotal = document.getElementById("cart-total");

    let container2 = document.getElementById("container2");
    let payment = document.getElementById("payment");

    let LSData = localStorage.getItem("cart");
    if (LSData === null) {
      LSData = [];
    } else {
      LSData = JSON.parse(LSData);
    }
    display(LSData);
    // console.log(LSData);
    function display(data) {
      container2.innerHTML = "";
      // console.log(data);

      data.forEach((el) => {
        console.log(el);
        let cart = document.createElement("div");
        cart.className = "cart";
        // let imgDiv = document.createElement("div");
        // imgDiv.className = "imgDiv";
        let textDiv = document.createElement("div");
        textDiv.className = "textDiv ";
        let img = document.createElement("img");
        img.className = "Cimg";
        let brand = document.createElement("h3");
        let price = document.createElement("p");
        let paydetails = document.createElement("div");
        paydetails.className = "payDetails";
        let increment = document.createElement("button");
        let quantity = document.createElement("span");
        let decrement = document.createElement("button");
        let remove = document.createElement("button");
        remove.className = "remove";

        img.src = el.img;
        brand.innerText = el.brand;
        price.innerText = `$${el.price}`;
        increment.innerText = "+";
        quantity.innerText = el.quantity;
        decrement.innerText = "-";
        remove.innerText = "Remove";

        increment.addEventListener("click", function () {
          el.quantity++;
          localStorage.setItem("cart", JSON.stringify(LSData));
          display(LSData);
        });

        decrement.addEventListener("click", function () {
          if (el.quantity > 1) {
            el.quantity--;
            localStorage.setItem("cart", JSON.stringify(LSData));
            display(LSData);
          }
        });

        remove.addEventListener("click", function () {
          LSData = LSData.filter((ele) => {
            return ele.id != el.id;
          });
          localStorage.setItem("cart", JSON.stringify(LSData));
          display(LSData);
        });

        paydetails.append(increment, quantity, decrement, remove);
        textDiv.append(brand, price, paydetails);
        cart.append(img, textDiv);
        container2.append(cart);
      });

      let cartTotal = document.getElementById("cart-total");
      let sum = 0;
      for (let i = 0; i < LSData.length; i++) {
        sum += LSData[i].quantity * LSData[i].price;
      }
      cartTotal.innerText = `$${sum}`;
    }
   
    let logo = document.getElementById("logo");
    logo.addEventListener("click", function () {
      window.location.href = "home.html";
    });
    let checkout = document.getElementById("checkout");
    checkout.addEventListener("click", function () {
      window.location.href = "checkout.html";
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