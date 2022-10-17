import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello1 from './Hello/Hello1';
import Deneme from './Hello/Deneme';
import Baglanti from './Hello/Baglanti';
import Silinecek from './Hello/Silinecek';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    Merhaba
    <Hello1/>
    <Deneme/>
    <Baglanti/>
    <Silinecek/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

