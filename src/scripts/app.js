// import { showStatus } from "./show-status.js";

function runRegistration() {
  const lastName = document.querySelector("#last-name");
  const firstName = document.querySelector("#first-name");
  const userName = document.querySelector("#user-name");
  const email = document.querySelector("#email");
  const mobile = document.querySelector("#mobile");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");
  const bntRegister = document.querySelector("#btn-register");
  const signInLink = document.querySelector("#sign-in-link");
  const statusMessage = document.querySelector(".status-message");

  lastName.addEventListener("focus", () => {
    showStatus(
      "Please enter your last name (max 30 letters incl spaces)",
      statusMessage,
      false,
    );
  });
  firstName.addEventListener("focus", () => {
    showStatus(
      "Please enter your first name (max 30 letters incl spaces)",
      statusMessage,
      false,
    );
  });
  userName.addEventListener("focus", () => {
    showStatus(
      "Please enter user name you want to use (6 to 8 chars, only alphaneumeric)",
      statusMessage,
      false,
    );
  });
  email.addEventListener("focus", () => {
    showStatus(
      "Please enter your email address (existing)",
      statusMessage,
      false,
    );
  });
  mobile.addEventListener("focus", () => {
    showStatus(
      "Please enter your Mobile Number (10 digits, 13 with country code)",
      statusMessage,
      false,
    );
  });
  password.addEventListener("focus", () => {
    showStatus(
      "Please enter password (minimum 8, maximum 20",
      statusMessage,
      false,
    );
  });
  confirmPassword.addEventListener("focus", () => {
    showStatus(
      "Please confirm password (Type the same password again)",
      statusMessage,
      false,
    );
  });
  bntRegister.addEventListener("click", (e) => {
    if (!lastName.validity.valid) {
      showStatus("Invalid Last Name!", statusMessage, true);
      e.preventDefault();
      return;
    }
    if (!firstName.validity.valid) {
      showStatus("Invalid First Name!", statusMessage, true);
      e.preventDefault();
      return;
    }
    if (!userName.validity.valid) {
      showStatus("Invalid User Name! First letter must be a alphabet.");
      e.preventDefault();
      return;
    }
  });
  signInLink.addEventListener("click", () => {});
}

function showStatus(message = "", element = "", errorMessage = false) {
  console.log(element);
  if (element) {
    if (errorMessage) {
      element.style.color = "red";
    } else {
      element.style.color = "black";
    }
    element.innerText = message;
  } else {
    console.log(errorMessage ? "Error: " : "" + message);
  }
}

window.onload = runRegistration();
