import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
<<<<<<< HEAD
import reportWebVitals from '../src/components/reportWebVitals';
=======
import reportWebVitals from './reportWebVitals';
>>>>>>> 639b5e065de98c04b1925698d75f4fca8bacd14d
import MyRouter from './MyRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
