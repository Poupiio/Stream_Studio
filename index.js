const contactForm = document.getElementById('form-contact');
const basicMail = document.getElementById('basic-email');
const user = document.getElementById('user-name');
const payPalMail = document.getElementById('paypal-email');
const tel = document.getElementById('tel');
const msgSubject = document.getElementById('msg-subject');
const msg = document.getElementById('floatingTextarea');

async function handleSubmit(e) {
   e.preventDefault();

   let status = document.getElementById("my-form-status");
   let data = new FormData(e.target);

   fetch(e.target.action, {
      method: contactForm.method,
      body: data,
      headers: {
         'Accept': 'application/json'
      }
   })
   .then(response => {
      if (response.ok) {
         status.innerHTML = `Votre message a bien été envoyé ! <i class="fa-regular fa-face-smile" style="color: #ff0000;"></i>`;
         contactForm.reset();
      } else {
         response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
               status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
               status.innerHTML = "Oops! Une erreur s'est produite lors de l'envoi du formulaire !"
            }
         })
      }
   }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
   });
};
contactForm.addEventListener("submit", handleSubmit);