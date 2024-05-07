import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import LogoH from "../images/Logo2.jpg";

const NavBar = () => {
  return (
    <div>
      <div className="flex items-center h-16 bg-white px-4 border-b">
        <div className="flex items-center">
          <img src={LogoH} className="h-12" alt="logo oficial Horizontal" />
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Home
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
