import React from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

const UsedPage = () => {
  return (
    <div>
      <Header/>
      <h1 class="text-3xl font-bold text-center mt-10">Conoce nuestros autos semi-nuevos</h1>

        <div class="flex flex-wrap justify-center mt-4">
        <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
            <form class="flex flex-col justify-between items-center">
                <img src={Aveo} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Chevrolet Aveo</h2>
                <h2 class="text-lg font-bold mb-2">2018 - 80,300km - Estandar</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $167,999</h2>
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
            </form>
            </div>
        </div>
        </div>  

        <Footer />
    </div>
  );
};

export default UsedPage;