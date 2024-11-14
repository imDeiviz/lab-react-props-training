import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Asegúrate de que este archivo existe
import Greetings from './components/greetings/greetings'; // Importa el componente Greetings

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    <Greetings lang="es">Carlos</Greetings>
    <Greetings lang="en">John</Greetings>
  </React.StrictMode>
);