console.log("asdasdasdad");

const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPhone = document.querySelector("#input-phone");
const inputSubject = document.querySelector("#input-subject");
const inputMessage = document.querySelector("#input-message");
const submitBtn = document.querySelector(".btn-send");
const submitMessage = document.querySelector("#submit-message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Message has been sent successfully!");

  inputName.classList.toggle("hidden");
  inputEmail.classList.toggle("hidden");
  inputPhone.classList.toggle("hidden");
  inputSubject.classList.toggle("hidden");
  inputMessage.classList.toggle("hidden");
  submitMessage.classList.toggle("hidden");

  if (submitBtn.textContent === "Send Message") {
    submitBtn.textContent = "Close";
  } else {
    submitBtn.textContent = "Send Message";
  }
});
