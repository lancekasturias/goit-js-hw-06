const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value.trim();
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  if (enteredValue.length === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
