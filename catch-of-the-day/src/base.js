import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBjChG06q5UPPUi7q8woW-EjpX58ur7uKk',
  authDomain: 'catch-of-the-day-dpiston.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-dpiston.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// look a named export
export { firebaseApp };

// here's a defualt export
export default base;
