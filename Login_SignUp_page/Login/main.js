const pass_field = document.querySelector(".password");
const showButton = document.querySelector(".show");

showButton.addEventListener("click", function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    showButton.textContent = "HIDE";
    showButton.style.color = "#3498db";
  } else {
    pass_field.type = "password";
    showButton.textContent = "SHOW";
    showButton.style.color = "#222";
  }
});
