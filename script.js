const form = document.querySelector('.card-form');
const input =  document.querySelector('.form-input');
const errorMessage =  document.querySelector('.error-message');

if (form) {
  form.addEventListener("submit", function(event) {
  event.preventDefault();

  const emailValue = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(emailValue)) {
    input.classList.add("error");
    errorMessage.style.display = "block";
    return;
  }

  input.classList.remove("error");
  errorMessage.style.display = "none";

  localStorage.setItem("userEmail", emailValue);

  window.location.href = "success.html";
  });
}

const emailLink = document.querySelector('.email-link');
const storedEmail = localStorage.getItem("userEmail");
const dismissMessage = document.querySelector('.dismiss-button')

if (storedEmail && emailLink) {
  emailLink.textContent = storedEmail;
  emailLink.href = `mailto:${storedEmail}`;
}

if (dismissMessage) {
  dismissMessage.addEventListener('click', function() {
    localStorage.removeItem("userEmail");

    window.location.href = "index.html";

  });
}