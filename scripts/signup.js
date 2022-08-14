import navbar from "../components/navbar.js";

document.querySelector(".navbar").innerHTML = navbar();

let register = async (e) => {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let username = document.querySelector("#username").value;
  let mobile = document.querySelector("#mobile").value;
  let description = document.querySelector("#desc").value;

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    username === "" ||
    mobile === null ||
    description === ""
  ) {
    return alert("Fill All Details First");
  }

  let form_data = {
    name: name,
    email: email,
    password: password,
    username: username,
    mobile: mobile,
    description: description,
  };
  // console.log(form_data);

  form_data = JSON.stringify(form_data);

  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/auth/register`,
    {
      method: `POST`,
      body: form_data,

      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  alert(data.message);
  window.location.href = "login.html";
  // console.log(data.message);
};

document.querySelector("#submit").addEventListener("click", register);
