// AssignLeaderForm.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AssignLeaderForm = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Tu lógica para manejar la asignación del líder aquí
    console.log("Leader assigned:", selectedUser);

    // Cerrar el formulario después de enviar
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg relative flex flex-col items-center max-w-[400px] w-full">
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-0 right-0 m-6 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-2xl font-semibold mb-4">Assign Leader to this</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 w-full">
            <label htmlFor="search" className="block text-sm font-bold text-gray-700">
              Search
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="userList" className="block text-sm font-bold text-gray-700">
              Select User
            </label>
            <select
              id="userList"
              name="userList"
              value={selectedUser}
              onChange={(e) => handleUserSelect(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="" disabled>Select</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>

          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="bg-[#FF9B44] text-white px-4 py-2 rounded-md hover:bg-opacity-80"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateList;
