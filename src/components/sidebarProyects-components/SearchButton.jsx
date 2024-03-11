import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import CreateProjectPage from "../../pages/CreateProjectPage";
import ProjectsPage from "../../pages/ProjectsPage";
=======
>>>>>>> cabf186249b10977371499eb5c2085ae84475636

const ButtonSearch = () => {
  const [clientId, setClientId] = useState("");
  const [employeeName, setExpertName] = useState("");
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

<<<<<<< HEAD
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const Projectmenu = () => {
    try {
      Navigate("/Projectmenu");
    } catch (error) {
      setError("Something is wrong");
    }
  };
  return (
    <div>
      <div className="form-container">
        <h1 className="ml-15">Projects</h1>
        <div className="flex justify-end px-80 pb-1 h-15 ml-20">
          <button
            onClick={ProjectsPage}
            className="bg-white border border-[#E3E3E3] mx-1 rounded-lg w-auto flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faTableCells} className="" />
          </button>
          <button
            onClick={Projectmenu}
            className="bg-white border border-[#E3E3E3] mx-1 rounded-lg w-auto flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faBars} className="" />
          </button>
          <CreateProjectPage />
        </div>
        <h2 className="ml-23">Dashboard</h2> <br />
        {/* Casilla de Client ID */}
=======
  const Projectmenu = () => {
    try {
      navigate("/Projectmenu");
    } catch (error) {
      console.error("Something is wrong", error);
    }
  };

  return (
    <div className="form-container">
      <div className="flex items-stretch space-x-4">
>>>>>>> cabf186249b10977371499eb5c2085ae84475636
        <input
          type="text"
          placeholder="Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="flex-grow input-field border border-gray-300 rounded-md px-2 py-1"
        />
<<<<<<< HEAD
        {/* Casilla de Employee Name */}
=======

>>>>>>> cabf186249b10977371499eb5c2085ae84475636
        <input
          type="text"
          placeholder="Expert Name"
          value={employeeName}
          onChange={(e) => setExpertName(e.target.value)}
          className="flex-grow input-field border border-gray-300 rounded-md px-2 py-1"
        />
<<<<<<< HEAD
        {/* Casilla Texto de la Compañía */}
        <div className="input-field">
          <span style={{ color: "grey" }}>Category</span>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            style={{
              width: "calc(100% - 10px)", // Ajusta el ancho del select para que se ajuste al contenedor
              marginLeft: "-2px",
            }}
          >
            <option value="" disabled>
              Seleccione Designation
=======

        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="flex-grow px-2 py-1 border border-gray-300 rounded-md"
        >
          <optgroup label="Category">
            <option value="" disabled>
              Select Designation
>>>>>>> cabf186249b10977371499eb5c2085ae84475636
            </option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Employee">Employee</option>
<<<<<<< HEAD
          </select>
        </div>
        <div className="search-button" onClick={() => console.log("SEARCH")}>
=======
          </optgroup>
        </select>

        <button
        type="button"
          className="flex-grow bg-green-500 text-white h-10 rounded-md cursor-pointer px-4"
          onClick={() => console.log("SEARCH")}
        >
>>>>>>> cabf186249b10977371499eb5c2085ae84475636
          Search
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ButtonSearch;
