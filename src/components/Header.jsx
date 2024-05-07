import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../images/Logo2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAddressCard } from "@fortawesome/free-solid-svg-icons";

const BarraVenta = () => {
  return (
    <div className="bg-red-400 border-b border-black flex items-center h-20 px-4 md:px-8 lg:px-16 xl:px-4 justify-between">
      <div className="flex items-center">
        <img
          src={Image}
          alt="Logo"
          className="ml-4 md:max-h-full size-20"
        />
      </div>
      <div className="flex items-center">
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

        <div className="flex space-x-2">
          <button  className="border-none bg-red-400">
            <NavLink to="NewCarsPage" className="text-gray-700 hover:text-red-500 transition duration-300 mt-3">
              Nuevos
            </NavLink>
          </button>            

          <button  className="border-none bg-red-400">
            <NavLink to="UsedPage" className="text-gray-700 hover:text-red-500 transition duration-300 mt-3">
              Semi-Nuevos
            </NavLink>
          </button>
            
            <button  className="border-none bg-red-400">
            <NavLink to="LoginPage">
              <div>
                <FontAwesomeIcon icon={faAddressCard} className="text-xl" color="black"/>
              </div>
            </NavLink>
            </button>
        </div>
      </div>
    </div>
  );
};

export default BarraVenta;
