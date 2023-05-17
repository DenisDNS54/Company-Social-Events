import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//To change the start point of the app to Log In, change line 5 to: import App from './App';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    {/* Also change line 11 with '<App />' */}
    <App />
  </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
