// Eventlistner på "Godkend og luk" knappen
document.querySelector("#reset_btn").addEventListener("click", reset);

// Resetter Formen og skjuler Summary
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
  updateValue();
}

// variabler til formen og alle de sted vi skal skrive det ud
const form = document.querySelector("#webform");

const sumName = document.querySelector("#sumName");
const sumEmail = document.querySelector("#sumEmail");
const sumPhone = document.querySelector("#sumPhone");
const sumKommentarer = document.querySelector("#sumKommentarer");

// Eventlistner på form submit
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  // Stoppe default - som vi ikke gør, normalt vil formen skulle sendes til en server
  e.preventDefault();

  // Gemmer dataen i en variabel
  const formData = new FormData(form);

  sumName.textContent = formData.get("first_name");
  sumEmail.textContent = formData.get("email");
  sumPhone.textContent = formData.get("TLF");
  sumKommentarer.textContent = formData.get("Kommentarer");

  // Viser Summary
  document.querySelector("#sum").style.display = "block";
}
