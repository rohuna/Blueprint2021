var admin = require('firebase-admin');

var serviceAccount = require("my-app/facematch-6e6ff-firebase-adminsdk-cc3yf-160548092f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://facematch-6e6ff.firebaseio.com'
});

const db = admin.firestore();

const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
