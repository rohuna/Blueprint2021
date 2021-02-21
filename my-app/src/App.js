// import logo from './logo.svg';
import {test} from './backend/facemethods.js'
import Navbar from './Navbar'


function App() {
  return (
    <div className='App'>
      
      

      <Navbar/>
      <h1>{test()}</h1>
    </div>
  );
}

export default App;