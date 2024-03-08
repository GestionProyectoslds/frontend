import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTableCells } from "@fortawesome/free-solid-svg-icons";
import "../../styles/projects.css";
import { useNavigate } from "react-router-dom";
import CreateProjectButton from "../homePage-components/CreateProjectButton";
import ProjectsPage from "../../pages/ProjectsPage";

const ButtonSearch = () => {
  // Estado para almacenar el valor del Client ID ingresado por el usuario
  const [clientId, setClientId] = useState("");
  // Estado para almacenar el valor del nombre del empleado ingresado por el usuario
  const [employeeName, setExpertName] = useState("");
  // Estado para almacenar la designación seleccionada por el usuario
  const [designation, setDesignation] = useState("");

  const [error, setError] = useState("");
  const Navigate= useNavigate();
  const Projectmenu = ()=>{
    try{
      Navigate ("/Projectmenu")
      } catch (error) {
      setError("Something is wrong")
      }
  };
    return (
    <div>
      <div className="form-container">
        <h1 className='ml-15'>Projects</h1> 

        <div className="flex justify-end px-80 pb-1 h-15 ml-20"> 
          <button onClick={ProjectsPage} className="bg-white border border-[#E3E3E3] mx-1 rounded-lg w-auto flex justify-center items-center">
          <FontAwesomeIcon icon={faTableCells} className="" />
          </button>
          <button onClick={Projectmenu} className="bg-white border border-[#E3E3E3] mx-1 rounded-lg w-auto flex justify-center items-center">
            <FontAwesomeIcon icon={faBars} className="" />
          </button>
          <CreateProjectButton/>
        </div>

        <h2 className='ml-23'>Dashboard</h2> <br/>
        
        {/* Casilla de Client ID */}
        <input
          type="text"
          placeholder="Client ID" // Texto de ejemplo que aparecerá antes de que el usuario escriba
          value={clientId} // Valor del Client ID
          onChange={(e) => setClientId(e.target.value)} // Actualiza el estado cuando el usuario escribe
          className="input-field"
        />

        {/* Casilla de Employee Name */}
        <input
          type="text"
          placeholder="Expert Name" // Texto de ejemplo que aparecerá antes de que el usuario escriba
          value={employeeName} // Valor del Employee Name
          onChange={(e) => setExpertName(e.target.value)} // Actualiza el estado cuando el usuario escribe
          className="input-field"
        />

        {/* Casilla Texto de la Compañía */}
        <div className="input-field">
          <span style={{ color: 'grey' }}>Category</span>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            style={{
              width: 'calc(100% - 10px)', // Ajusta el ancho del select para que se ajuste al contenedor
              marginLeft: '-2px',
            }}
          >
            <option value="" disabled>Seleccione Designation</option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        <div className="search-button" onClick={() => console.log("SEARCH")}>
          Search
        </div>
      </div>
    </div>
  );
};

export default ButtonSearch;