// import logo from './logo.svg';

import './App.css';
import {addNewDoc, initAdmin} from './backend/database.js';


import {test} from './backend/facemethods.js'
import Navbar from './Navbar'
import firebase from "firebase"
const config = {
  apiKey: "AIzaSyA80sADNvKxF0nJdvdBH7MUT0lBGOm47hA",
  authDomain: "facematch-6e6ff.firebaseapp.com",
  projectId: "facematch-6e6ff",
  storageBucket: "facematch-6e6ff.appspot.com",
  messagingSenderId: "643836722537",
  appId: "1:643836722537:web:9076b6df6f43c3123ad1f8",
  measurementId: "G-BV0PZQDF21"
};
firebase.initializeApp(config)
const db = firebase.firestore();





function App() {

  testBackend();
  
  return (
    <div className='App'>
      
      

      <Navbar/>
      <h1>{test()}</h1>
    </div>
  );
}

function testBackend()
{
  const docRef = db.collection("test").doc();
  
  docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
  console.log(addNewDoc(db, "test", "hi"))
}

export default App;
