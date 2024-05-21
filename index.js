const contactForm = document.getElementById('form-contact');
const emailInput = document.getElementById('floatingInput');
const msg = document.getElementById('floatingTextarea');

contactForm.addEventListener('submit', (e) => {
   e.preventDefault;
   emailInput.value = "";
   msg.value = "";
})