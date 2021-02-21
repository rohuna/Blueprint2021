import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router, Route} from "react-router";

import './css/import.css';
import './css/style.css';

ReactDOM.render(
    <React.StrictMode>
      <App />
      <Router>
        <Route path={""} component={App}/>
        <Route path={"missinglist"} component={MissingList}/>
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
