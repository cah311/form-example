// variable declarations

const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const country = document.getElementById('country-input');
const countryError = document.querySelector('#country + span.error');

const postalCode = document.getElementById('postal-code');
const postalCodeError = document.querySelector('#postal-code + span.error');
const postalRegEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');
const passRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector(
  '#confirm-password + span.error'
);

// form submition testing
form.addEventListener('submit', (event) => {
  // if the email field is valid, let the form submit
  if (!email.validity.valid) {
    // if invalid, diplay error message
    showEmailError();
    // prevent the form from being sent while invalid
    event.preventDefault();
  } else if (country.value == '' || country.value == '-------') {
    // if option ios blank or default
    showCountryError();
    event.preventDefault();
  } else if (!postalRegEx.test(postalCode.value) || postalCode.value == '') {
    showPostalCodeError();
    event.preventDefault();
  } else if (!passRegEx.test(password.value) || password.value == '') {
    showPasswordError();
    event.preventDefault();
  } else if (
    confirmPassword.value !== password.value ||
    confirmPassword.value == ''
  ) {
    showConfirmPasswordError();
    event.preventDefault();
  }
});

// email validity testing

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

// country validity testing

country.addEventListener('input', (event) => {
  if (country.validity.valid) {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    showCountryError();
  }
});

function showCountryError() {
  if (country.value === '') {
    countryError.textContent = 'Please choose a country from the list';
  } else if (country.value === '-------') {
    countryError.textContent =
      'Please choose one of the countries from the list';
  }

  countryError.className = 'error active';
}

//postal code validation
postalCode.addEventListener('input', (event) => {
  if (postalRegEx.test(postalCode.value)) {
    postalCodeError.textContent = ''; // reset the content of the message
    postalCodeError.className = 'error'; // reset the visual state of the message
  } else {
    // if there is still an error, show the correct error
    showPostalCodeError();
  }
});

function showPostalCodeError() {
  if (postalCode.value == '') {
    postalCodeError.textContent = 'Please provide a Postal Code';
  } else if (!postalRegEx.test(postalCode.value)) {
    postalCodeError.textContent = 'Please provide a valid Postal Code';
  }

  postalCodeError.className = 'error active';
}

// password validation
password.addEventListener('input', (event) => {
  if (passRegEx.test(password.value)) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    showPasswordError();
  }
});

function showPasswordError() {
  if (password.value == '') {
    passwordError.textContent = 'Please enter your password';
  } else if (!passRegEx.test(password.value)) {
    passwordError.textContent =
      'Password must be min 8 characters, have 1 uppercase, one number, and one special character';
  }

  passwordError.className = 'error active';
}

// confirm password validation

confirmPassword.addEventListener('input', (event) => {
  if (confirmPassword.value === password.value) {
    confirmPasswordError.textContent = '';
    confirmPasswordError.className = 'error';
  } else {
    showConfirmPasswordError();
  }
});

function showConfirmPasswordError() {
  if (confirmPassword.value == '') {
    confirmPasswordError.textContent = 'Please confirm your password';
  } else if (confirmPasswordError.value !== password.value) {
    confirmPasswordError.textContent = 'Your passwords do not match';
  }

  confirmPasswordError.className = 'error active';
}
