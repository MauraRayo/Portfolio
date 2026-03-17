let frmEmail = document.getElementById("contact-form");

frmEmail.addEventListener("submit", sendEmail);

let serviceId = "service_jsge8sc";
let templateId = "template_pq9kqo8";
let apikey = "QnJUGSYtQSuXI5Twn";

function sendEmail(event) {
  event.preventDefault();
  emailjs.init(serviceId);

  emailjs
    .sendForm(serviceId, templateId, frmEmail, apikey)
    .then((result) => Swal.fire("El mensaje se ha enviado con éxito"))
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se ha podido enviar el mensaje",
      });
    });
}
