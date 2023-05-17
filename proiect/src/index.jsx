import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//To change the start point of the app to Log In, change line 5 to: import App from './App';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

