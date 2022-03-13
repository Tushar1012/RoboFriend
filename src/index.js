import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

import Cardlist from './Cardlist';
import reportWebVitals from './reportWebVitals';
//import Card from './Card';
import { robots } from './Robots';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cardlist robots={robots}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
