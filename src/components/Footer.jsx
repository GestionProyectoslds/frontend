import React from "react";
import Logo from "../images/footer/Logo.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Community Lab Alliance Logo"
            className="w-12 h-12 rounded-full"
          />
          <a className="font-bold text-gray-200 text-sm hover:text-gray-100">
            Community Lab Alliance
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a href="https://drive.google.com/file/d/11_DZ7m2lQnkoFVbLEGhag4W_XRqcM-on/view" className="font-bold text-lime-500 text-sm mx-4 my-2 md:my-0 hover:text-lime-500 block text-center md:inline">
            Aviso de Privacidad
          </a></div>
          <span className="font-bold text-gray-200 text-sm">
            @ 2023 Community Lab Alliance
          </span>
      </div>
    </footer>
  );
}

export default Footer;