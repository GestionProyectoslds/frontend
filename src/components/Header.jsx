import React from "react";
import Image from "../images/imghome/Logo15.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";

const BarraVenta = () => {
  return (
    <div className="bg-white border-b border-black flex items-center h-20 px-4 md:px-8 lg:px-16 xl:px-4 justify-between">
      {/* Sección izquierda de la barra, incluye el logo y el botón de menú */}
      <div className="flex items-center">
        <Sidebar />
        <img
          src={Image}
          alt="Logo"
          className="ml-4  bg-white max-h-16 md:max-h-full"
        />
      </div>

      {/* Sección derecha de la barra, incluye el campo de búsqueda y los botones de notificaciones y mensajes */}
      <div className="flex items-center">
        {/* Campo de búsqueda */}
        <div className="search-wrapper flex flex-row justify-end items-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mr-4">
          <input
            type="text"
            placeholder="Search here"
            className="search-input rounded-md px-3 py-2 w-full border border-gray-300 focus:border-primary-500 focus:ring-primary-500 focus:ring-opacity-50"
          />
          <button type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Botones de notificaciones, mensajes y perfil */}
        <div className="flex space-x-2">
          <button className="border-none bg-white">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="border-none bg-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button className="border-none bg-white">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarraVenta;
