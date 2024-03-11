import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonSearch = () => {
  const [clientId, setClientId] = useState("");
  const [employeeName, setExpertName] = useState("");
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

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
        <input
          type="text"
          placeholder="Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="flex-grow input-field border border-gray-300 rounded-md px-2 py-1"
        />

        <input
          type="text"
          placeholder="Expert Name"
          value={employeeName}
          onChange={(e) => setExpertName(e.target.value)}
          className="flex-grow input-field border border-gray-300 rounded-md px-2 py-1"
        />

        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="flex-grow px-2 py-1 border border-gray-300 rounded-md"
        >
          <optgroup label="Category">
            <option value="" disabled>
              Select Designation
            </option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Employee">Employee</option>
          </optgroup>
        </select>

        <button
        type="button"
          className="flex-grow bg-green-500 text-white h-10 rounded-md cursor-pointer px-4"
          onClick={() => console.log("SEARCH")}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ButtonSearch;
