import React from "react";
import Image from "../images/imghome/Logo15.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Sidebar';

const BarraVenta = () => {

  return (
    <div style={{ backgroundColor: "white", borderBottom: "1px solid black", textAlign: "justify", width: "100%", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px" }}>
      {/* Sección izquierda de la barra, incluye el logo y el botón de menú */}
      <div class="flex items-center">
        <Sidebar />
        <img src={Image} alt="Logo" class="ml-2 mr-2 bg-white" />
      </div>
      {/* Sección derecha de la barra, incluye el campo de búsqueda y los botones de notificaciones y mensajes */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Campo de búsqueda */}
        <div class="search-wrapper flex flex-row justify-end items-center w-full mr-20">
          <input type="text" placeholder="Search here" class="search-input rounded-md px-3 py-2 w-full md:w-3/4 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 focus:ring-opacity-50" />
          <button type="button">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>

        {/* Botón de notificaciones */}
        <button style={{ border: "none", background: "none", marginRight: "5px", marginLeft: "1px" }}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        {/* Botón de mensajes */}
        <button style={{ border: "none", background: "none", marginRight: "50px", marginLeft: "1px" }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        {/* Botón de Perfil */}
        <button style={{ border: "none", background: "none", marginRight: "15px", marginLeft: "1px" }}>
          <FontAwesomeIcon icon={faUser} />
        </button>

      </div>
    </div>
  );
}

export default BarraVenta;