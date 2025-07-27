import { showStatus } from "./utils.js";

export function runRegistration() {
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
  const regEx = [
    { userName: /^[A-Za-z][A-Za-z0-9-]{5,9}$/ },
    { email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    { mobile: /^(?:\+\d{1,3})?\d{10}$/ },
    { password: /^[\x21-\x7E]{8,20}$/ },
  ];
  console.log(regEx);

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
      showStatus(
        "Invalid User Name! First letter must be a alphabet.",
        statusMessage,
        true,
      );
      e.preventDefault();
      return;
    }
    if (!email.validity.valid) {
      showStatus("Invalid email ID.", statusMessage, true);
      e.preventDefault();
      return;
    }
    if (!mobile.validity.valid) {
      showStatus("Invalid mobile number.", statusMessage, true);
      e.preventDefault();
      return;
    }
    if (!password.validity.valid) {
      showStatus(
        "Invalid password (must be 8 to 20 characters).",
        statusMessage,
        true,
      );
      e.preventDefault();
      return;
    }
    if (password.value !== confirmPassword.value) {
      showStatus(
        "Password & Confirmation Password don't match.",
        statusMessage,
        true,
      );
      e.preventDefault();
      return;
    }
  });
  signInLink.addEventListener("click", () => {});
}

// window.onload = runRegistration();
