import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import LogoH from "../images/logoCLA.png";

const NavBar = () => {
  return (
    <div>
      {/* Contenedor superior con barra de navegación y icono de usuario */}
      <div className="flex items-center h-16 bg-white px-4 border-b">
        {/* Logo y Nombre de la Empresa a la izquierda con el icono de "briefcase" */}
        <div className="flex items-center">
          <img src={LogoH} className="h-12" alt="logo oficial Horizontal" />
        </div>
        {/* Navegación y Icono de Usuario a la derecha */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* separación de botones de Navegación */}
          <nav className="flex space-x-4">
            {/* botones de navegación */}
            {/* eliminate Navlink to DashboardPage when it gets useless */}
            {/* <NavLink
              to="DashboardPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Dashboard
            </NavLink> */}
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/SolutionsPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Busco Soluciones
            </NavLink>
            <NavLink
              to="/ContributePage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Brindo Soluciones
            </NavLink>
            <NavLink
              to="/AboutPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/BlogPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Blog
            </NavLink>
            {/* ... (agregar otros enlaces) */}
          </nav>

          {/* Icono de Usuario */}
          <form>
            <NavLink to="LoginPage">
              <div>
                <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
              </div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
