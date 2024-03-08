import React, { useEffect } from 'react';
import Header from '../components/Header';
import Cookies from 'js-cookie';

const DashboardPage = () => {
  useEffect(() => {
    const token = Cookies.get('token');
    const messageElement = document.getElementById('cookie-message');

    if (token) {
      // Si existe la cookie, mostrar el valor en la página
      messageElement.innerHTML = `Token: ${token}`;
    } else {
      // Si no existe la cookie, mostrar un mensaje de error
      messageElement.innerHTML = 'La cookie no existe o ha expirado';
    }
  }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez al cargar la página

  return (
    <div>
      <Header />
      <h1 className='ml-96'>Dashboard Page</h1>
      <p id='cookie-message'></p>
    </div>
  );
};

export default DashboardPage;
