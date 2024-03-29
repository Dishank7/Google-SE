import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './globle.css'
import App from './App';
import { StateContextProvider } from './contexts/StateContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <StateContextProvider>
  <Router>
    <App />
  </Router>
</StateContextProvider>
  
);
