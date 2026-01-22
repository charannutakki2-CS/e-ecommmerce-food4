function register() {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registered Successfully ✅");
  window.location.href = "login.html";
}

function login() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (
    savedUser &&
    email.value === savedUser.email &&
    password.value === savedUser.password
  ) {
    alert("Login Success ✅");
    localStorage.setItem("loggedIn", true);
    window.location.href = "checkout.html";
  } else {
    alert("Invalid Credentials ❌");
  }
}
