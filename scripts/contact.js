import emailjs from "./emailjs";

const contactForm = document.getElementById("form");
const contactIdInput = document.getElementById("id-input");

contactForm.onsubmit = (e) => {
  e.preventDefault();
  
  contactIdInput.value = Number.parseInt(Math.random() * 1000);

  emailjs.sendForm("mail_man", "mail_man", contactForm);
}
