const contactForm = document.getElementById('form-contact');
const basicMail = document.getElementById('basic-email');
const user = document.getElementById('user-name');
const payPalMail = document.getElementById('paypal-email');
const tel = document.getElementById('tel');
const msgSubject = document.getElementById('msg-subject');
const msg = document.getElementById('floatingTextarea');

contactForm.addEventListener('submit', (e) => {
   e.preventDefault;
   basicMail.value = "";
   user.value = "";
   payPalMail.value = "";
   tel.value = "";
   msgSubject.value = "12 mois";
   msg.value = "";
})