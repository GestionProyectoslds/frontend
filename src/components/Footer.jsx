import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-4 px-4 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="font-bold text-gray-200 text-sm hover:text-gray-100">
            Wanpi Inc
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a href="" className="font-bold text-lime-500 text-sm mx-4 my-2 md:my-0 hover:text-lime-500 block text-center md:inline">
            Aviso de Privacidad
          </a></div>
          <span className="font-bold text-gray-200 text-sm">
            @ 2024 Wanpi Inc
          </span>
      </div>
    </footer>
  );
}

export default Footer;