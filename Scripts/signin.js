let name = document.getElementById("name");
    let gender = document.getElementById("gender");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let form = document.querySelector("form");
    let Lform = document.getElementById("Lform");
    let Lemail = document.getElementById("Lemail");
    let Lpassword = document.getElementById("Lpassword");

    let LSdata = localStorage.getItem("user-details");
    if (LSdata === null) {
      LSdata = [];
    } else {
      LSdata = JSON.parse(LSdata);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (
        name.value === "" ||
        email.value === "" ||
        password.value === "" ||
        gender.value === ""
      ) {
        alert("Values can not be empty!!");
      } else {
        let obj = {
          name: name.value,
          gender: gender.value,
          email: email.value,
          password: password.value,
        };
        LSdata.push(obj);
        localStorage.setItem("user-details", JSON.stringify(LSdata));
        alert("Registeration Successful!!");
      }
    });

    Lform.addEventListener("submit", function (e) {
      e.preventDefault();
      if (check(LSdata)) {
        alert("LOGIN SUCCESSFULL!!");
        window.location.href = "products.html";
      } else {
        alert("Check Username or Password !!");
      }

      function check(LSdata) {
        for (let i = 0; i < LSdata.length; i++) {
          // console.log(name.value,LSdata[i].name,'d')
          if (
            Lemail.value === LSdata[i].email &&
            Lpassword.value === LSdata[i].password
          ) {
            return true;
          }
        }
        return false;
      }
    });