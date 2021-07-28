var firebaseConfig = {
  apiKey: "AIzaSyBByCG4jq7HKuKi7jTSMTGYP1doG_dXXsc",
  authDomain: "my-portfolio-c23fa.firebaseapp.com",
  projectId: "my-portfolio-c23fa",
  storageBucket: "my-portfolio-c23fa.appspot.com",
  messagingSenderId: "109439801946",
  appId: "1:109439801946:web:949160e7f850178dad1663",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let contactUs = firebase.database().ref('contactRequest');

document
  .querySelector('.php-email-form')
  .addEventListener('submit', submitContactForm);

function submitContactForm(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const subject = document.querySelector('#subject').value;
  //let date = toString(new Date());

  saveContactInfo(name, email, message, subject);
  document.querySelector('.php-email-form').reset();
  alert('Submitted.')
}
//push the data to collections
function saveContactInfo(name, email, message, subject) {
  let newContactUs = contactUs.push();

  newContactUs.set({
    Name: name,
    Email: email,
    Subject: subject,
    Message: message,
  });
}