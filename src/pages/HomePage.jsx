import React from "react";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/homePage.css";
import Header from "../components/Header";
import Mazda3 from "../images/Mazda3.png";
import Corvette from "../images/Corvette.png";
import Mustang from "../images/Mustang.png";
import Sentra from "../images/Sentra.png";
import Polo from "../images/Polo.png";
import Aveo from "../images/Aveo.jpg";
import Jetta from "../images/Jetta.jpg";
import Swift from "../images/Swift.jpg";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-red-100">
      <Header />
        <h1 class="text-3xl font-bold text-center mt-10">Conoce nuestros autos nuevos</h1>

        <div class="flex flex-wrap justify-center mt-4">
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
              <form class="flex flex-col justify-between items-center">
                <img src={Mazda3} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Mazda3 Sedán</h2>
                <h2 class="text-lg font-bold mb-2">2024 - Automático</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $392,900</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
            <form class="flex flex-col justify-between items-center">
                <img src={Corvette} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Chevrolet Corvette</h2>
                <h2 class="text-lg font-bold mb-2">2024 - Automático</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $2,999,900.00</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
            <form class="flex flex-col justify-between items-center">
                <img src={Mustang} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Ford Mustang</h2>
                <h2 class="text-lg font-bold mb-2">2024 - Estandar</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $392,900</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>
        </div>  

        <div class="flex flex-wrap justify-center mt-4">
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
              <form class="flex flex-col justify-between items-center">
                <img src={Polo} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Volkswagen Polo</h2>
                <h2 class="text-lg font-bold mb-2">2024 - Automático</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $408,970</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
            <form class="flex flex-col justify-between items-center">
                <img src={Sentra} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Nissan Sentra</h2>
                <h2 class="text-lg font-bold mb-2">2024 - Automático</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $401,900</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>
        </div>

        <h1 class="text-3xl font-bold text-center mt-10">Conoce nuestros autos semi-nuevos</h1>

        <div class="flex flex-wrap justify-center mt-4">
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
              <form class="flex flex-col justify-between items-center">
                <img src={Aveo} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Chevrolet Aveo</h2>
                <h2 class="text-lg font-bold mb-2">2018 - 80,300km - Estandar</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $167,999</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
            <form class="flex flex-col justify-between items-center">
                <img src={Jetta} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Volkswagen Jetta</h2>
                <h2 class="text-lg font-bold mb-2">2018 - 103,710km - Automático</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $210,900</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
            <form class="flex flex-col justify-between items-center">
                <img src={Swift} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Suzuki Swift</h2>
                <h2 class="text-lg font-bold mb-2">2022- 14,026km - Estandar</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $288,999</h2>
                <NavLink to="/AboutCar">
                  Ver Más
                </NavLink>
              </form>
            </div>
          </div>
        </div>  

      <Footer />
  </div>  
  );
};
export default HomePage;
