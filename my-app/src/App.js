// import logo from './logo.svg';
import './App.css';

import './import.css';
import Navbar from './Navbar'

import {initAdmin} from './backend/database.js';

function App() {

  testBackend();
  
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

function testBackend()
{
  console.log(initAdmin())
}

export default App;
