// Initialize Firebase(2)
// var config = {
//   apiKey: "AIzaSyBWiFwcpct2X_5tvy7K1tUEbpMVANvDzVU",
//   authDomain: "quicki-landing-page-5f14a.firebaseapp.com",
//   databaseURL: "https://quicki-landing-page-5f14a-default-rtdb.firebaseio.com",
//   projectId: "quicki-landing-page-5f14a",
//   storageBucket: "quicki-landing-page-5f14a.appspot.com",
//   messagingSenderId: "447024588545",
//   appId: "1:447024588545:web:d27c885e36a7e200385d00",
//   measurementId: "G-HNF1E0KGN4"
// };
const firebaseConfig = {
  apiKey: "AIzaSyD1r8bpmLj4i8ZAQPCxIHPYYS5rE0G9CRQ",
  authDomain: "quicki-landing-page.firebaseapp.com",
  databaseURL: "https://quicki-landing-page-default-rtdb.firebaseio.com",
  projectId: "quicki-landing-page",
  storageBucket: "quicki-landing-page.appspot.com",
  messagingSenderId: "954287663733",
  appId: "1:954287663733:web:9c231c27f206af4444263c",
  measurementId: "G-650MT52HW9"
};
firebase.initializeApp(firebaseConfig);

//Reference for form collection(3)
let formMessage = firebase.database().ref('quicki-landing-page-default-rtdb:');

//listen for submit event//(1)
document
  .getElementById('emailform')
  .addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let email = document.querySelector('#email').value;

  //send message values
  sendMessage(email);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('emailform').reset();
}

//Send Message to Firebase(4)

function sendMessage(email) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    email: email
  });
}