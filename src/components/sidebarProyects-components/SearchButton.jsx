import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTableCells } from "@fortawesome/free-solid-svg-icons";
import "../../styles/projects.css";
import { useNavigate } from "react-router-dom";
import CreateProjectButton from "../homePage-components/CreateProjectButton";
import ProjectsPage from "../../pages/ProjectsPage";

const ButtonSearch = () => {
  const [clientId, setClientId] = useState("");
  const [employeeName, setExpertName] = useState("");
  const [designation, setDesignation] = useState("");
  const [error, setError] = useState("");
  const Navigate= useNavigate();

  const Projectmenu = () => {
    try {
      Navigate("/Projectmenu")
    } catch (error) {
      setError("Something is wrong")
    }
  };

  return (
    <div>
      <div className="form-container">
        <h1 className='ml-15'>Projects</h1> 

        <div className="flex justify-end px-4 md:px-16 pb-1 h-15 ml-20"> 
          <button onClick={ProjectsPage} className="bg-white border border-[#E3E3E3] mx-1 rounded-lg w-auto flex justify-center items-center">
            <FontAwesomeIcon icon={faTableCells} className="" />
          </button>
          <button onClick={Projectmenu} className="bg-white border border-[#E3E3E3] mx-1 rounded-lg w-auto flex justify-center items-center">
            <FontAwesomeIcon icon={faBars} className="" />
          </button>
          <CreateProjectButton/>
        </div>
        

        <h2 className='ml-5 md:ml-23'>Dashboard</h2> <br/>
        
        <input
          type="text"
          placeholder="Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Expert Name"
          value={employeeName}
          onChange={(e) => setExpertName(e.target.value)}
          className="input-field"
        />

        <div className="input-field">
          <span style={{ color: 'grey' }}>Category</span>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            style={{
              width: 'calc(100% - 10px)',
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