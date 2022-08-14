import navbar from "../components/navbar.js";

document.querySelector(".navbar").innerHTML = navbar();

//getting the username form local storage & append to login div.

let localUser = JSON.parse(localStorage.getItem("username"));
let loginDiv = document.querySelector(".login");
if (localUser === null) {
  loginDiv.innerHTML = "Login";
} else {
  loginDiv.innerHTML = `Welcome ${localUser}`;
}

//getting login details
let login = async (e) => {
  e.preventDefault();

  let username =document.querySelector("#username").value;
  let password =document.querySelector("#password").value;

  if(username==="" || password===""){
    return alert ("Please Fill All details");
  }

  let form_data = {
    username: username,
    password: password,
  };

  form_data = JSON.stringify(form_data);
  try {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: `POST`,
      body: form_data,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    let username = document.querySelector("#username").value;
    console.log(data);
    getUserDetails(username, data.token);
  } catch (err) {
      alert("Invalid Credentials");
    console.log("myerr:", err);
  }
};

document.querySelector("#submit").addEventListener("click", login);

//fetch the user details
let getUserDetails = async (username, token) => {
  try {
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data = await res.json();
    console.log("user-data", data);
    localStorage.setItem("username", JSON.stringify(data.username));

    if (data.username !== null) {
      alert("Login Succes");
      alert("Explore Website Now");
      return (window.location.href = "index.html");
    } else {
      return alert("Invalid Credentials");
    }
  } catch (err) {
    console.log("myerr:", err);
  }
};
