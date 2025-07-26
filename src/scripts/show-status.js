export function showStatus(message = "", element = "", errorMessage = false) {
  if (element) {
    if (errorMessage) {
      element.style.color = "red";
    } else {
      element.style.color = "white";
    }
    element.innerText = message;
  } else {
    console.log(errorMessage ? "Error: " : "" + message);
  }
}
