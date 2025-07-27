export function showStatus(message = "", element = "", errorMessage = false) {
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
