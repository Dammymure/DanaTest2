const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display mobile menu
const mobileMenu = () => {
 menu.classList.toggle('is-active');
 menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// FORM VALIDATION
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('Email')
const message = document.getElementById('message')


// show input error message
function showError(input, message) {
 const formControl = input.parentElement;
 formControl.className = 'form-control error';
 const small = formControl.querySelector('small');
 small.innerText = message;
}


// show success outline
function showSuccess(input) {
 const formControl = input.parentElement
 formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
 const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if (re.test(input.value.trim())) {
  showSuccess(input)
 } else {
  showError(input, 'Email is not valid')
 }
}


// CHECK REQUIRED FIELDS
function checkRequired(inputArr) {
 inputArr.forEach(function (input) {
  if (input.value.trim() === '') {
   showError(input, `${getFieldName(input)} is required`)
   // console.log(getFieldName(input));
  } else {
   showSuccess(input)
  }
 });
}

// CHECK input Length
function checkLength(input, min, max) {
 if (input.value.length < min) {
  showError(input, `${getFieldName(input)} must be at least ${min} characters`)
 } else if (input.value.length > max) {
  showError(input, `${getFieldName(input)} must be less than ${max} characters`)
 } else {
  showSuccess(input)
 }
}



// GET FIELDNAME
function getFieldName(input) {
 return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


// EVENT LISTENER
form.addEventListener('submit', function (e) {
 e.preventDefault();

 checkRequired([username, email, message])
 checkLength(username, 3, 15)
 checkEmail(email)
 
 const nameValue = username.value
 const emailValue = email.value
 const messageValue = message.value

 // Display the values in an alert
 alert(`Username: ${nameValue}\nEmail: ${emailValue}\nMessage: ${messageValue}`);
})