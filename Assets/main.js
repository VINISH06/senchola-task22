const Name = document.getElementById("signupName");
const Email = document.getElementById("signupEmail");
const Password = document.getElementById("signupPassword");
const Users = [];
document.getElementById("signup-form").addEventListener("submit", (event) => {
  if (!validate()) {
    event.preventDefault();
  }
});

function validate() {
  const signupName = Name.value.trim();
  const signupEmail = Email.value.trim();
  const signupPassword = Password.value.trim();

  var valid = true;

  if (signupName === "") {
    valid = false;
    setError(Name, "Please enter a username.");
  } else {
    setSuccess(Name);
  }

  if (signupEmail === "") {
    valid = false;
    setError(Email, "Please enter an email.");
  } else if (!isValidEmail(signupEmail)) {
    valid = false;
    setError(Email, "Please enter a valid email.");
  } else {
    setSuccess(Email);
  }

  if (signupPassword === "") {
    valid = false;
    setError(Password, "Please enter a password.");
  } else if (signupPassword.length < 8) {
    valid = false;
    setError(Password, "Must be 8 Characters in  password.");
  } else {
    setSuccess(Password);
  }
  return valid;
}

function setError(elementId, message) {
  const element = elementId.parentElement;
  const errorElement = element.querySelector(".error");

  errorElement.innerText = message;
  element.classList.remove("success");
  element.classList.add("error");
}

function setSuccess(elementId) {
  const element = elementId.parentElement;
  const errorElement = element.querySelector(".error");
  errorElement.innerText = "";
  element.classList.remove("error");
  element.classList.add("success");
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function signup() {
  let Name1 = Name.value;
  let Email1 = Email.value;
  let Password1 = Password.value;
  const msg = document.querySelector(".Registered");
  if (Name1 && Email1 && Password1) {
    const user = { Name1, Email1, Password1 };
    Users.push(user);

    msg.innerText = "Signup successful. You can now login.";
    msg.style.color = "white";
  } else {
    msg.innerText = "Signup Invalid Error";
    msg.style.color = "red";
  }
}

////////////////////////////////////////
function login() {
  const username = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = Users.find(
    (u) => u.Email === username && u.Password === password
  );

  if (user) {
    // Redirect to a custom page
    window.location.href = "To-do.html";
  } else {
    document.querySelector(".loggin").innerText = "Login Failed";
    document.querySelector(".loggin").style.color = "red";
  }
}
console.log(u.email);