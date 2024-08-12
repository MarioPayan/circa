import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a react-dom/client
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear la raíz del React
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un punto final de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
