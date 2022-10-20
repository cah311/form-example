// variable declarations

const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

const postalCode = document.getElementById('postal-code');
const postalCodeError = document.querySelector('#postal-code + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector(
  '#confirm-password + span.error'
);

// email validity testing

form.addEventListener('submit', (event) => {
  // if the email field is valid, let the form submit
  if (!email.validity.valid) {
    // if invalid, diplay error message
    showEmailError();
    // prevent the form from being sent while invalid
    event.preventDefault();
  }
});

email.addEventListener('input', (event) => {
  // check validity each time user types somthing
  if (email.validity.valid) {
    // in the case there is an error message
    // showing, remove message once valid
    emailError.textContent = ''; // reset the content of the message
    emailError.className = 'error'; // reset the visual state of the message
  } else {
    // if there is still an error, show the correct error
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // if email field is empty
    emailError.textContent = 'Please enter an email address';
  } else if (email.validity.typeMismatch) {
    // If the field doesnt contain a valid email address
    emailError.textContent = 'Please enter a valid email address';
  }

  // set appropriate styling
  emailError.className = 'error active';
}
