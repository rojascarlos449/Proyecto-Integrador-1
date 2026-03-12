
// VARIABLES
const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


// EXPRESIONES REGULARES
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// FUNCIONES
function showError(field, message) {
  const input = document.getElementById(field);
  const helper = document.getElementById(`${field}-error`);

  input.classList.add("has-error");
  helper.textContent = message;
  helper.classList.add("has-error");
}

function clearErrors() {
  const helpers = document.querySelectorAll(".helper-text");
  const inputs = document.querySelectorAll(".field-element");

  helpers.forEach(helper => helper.classList.remove("has-error"));
  inputs.forEach(input => input.classList.remove("has-error"));
}

function showSuccess() {
  const successMsg = document.createElement("p");
  successMsg.textContent = "✅ Mensaje enviado correctamente. Gracias por contactarnos.";
  successMsg.style.color = "green";
  successMsg.style.textAlign = "center";
  successMsg.style.marginTop = "15px";

  form.appendChild(successMsg);

  setTimeout(() => {
    successMsg.remove();
  }, 4000);
}


// EVENTO SUBMIT
form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();

  let valid = true;

// Validaciones 
  if (!nameRegex.test(nameInput.value.trim())) {
    showError("name", "El nombre debe tener entre 3 y 20 letras");
    valid = false;
  }

  if (!emailRegex.test(emailInput.value.trim())) {
    showError("email", "Ingresá un email válido");
    valid = false;
  }

  if (messageInput.value.trim().length < 10) {
    showError("message", "El mensaje debe tener al menos 10 caracteres");
    valid = false;
  }

  if (valid) {
    const data = {
      nombre: nameInput.value,
      email: emailInput.value,
      mensaje: messageInput.value
    };

    console.log("Datos enviados:", data);

    showSuccess();
    form.reset();
  }
});