import React from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

const NewCarsPage = () => {
  return (
    <div>
      <Header/>
      <h1 class="text-3xl font-bold text-center mt-10">Conoce nuestros autos nuevos</h1>

        <div class="flex flex-wrap justify-center mt-4">
        <div class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-md shadow-md p-4">
            <form class="flex flex-col justify-between items-center">
                <img src={Mazda3} class="h-40 w-full object-cover mb-4" alt="" />
                <h2 class="text-lg font-bold mb-2">Mazda3 Sedán</h2>
                <h2 class="text-lg font-bold mb-2">2024 - Automático</h2>
                <h2 class="text-lg font-bold mb-2">Precio de contado: $392,900</h2>
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
            </form>
            </div>
        </div>
        </div>
        <Footer />        
    </div>
  );
};

export default NewCarsPage;