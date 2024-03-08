import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ActionMenu = ({ onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe al hacer clic en el botón
    setShowMenu(!showMenu);
  };

  const handleEdit = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe al hacer clic en el botón
    if (onEdit) {
      onEdit();
    }
    setShowMenu(false);
  };

  const handleDelete = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe al hacer clic en el botón
    if (onDelete) {
      onDelete();
    }
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-600 bg-white px-4 py-1 border border-gray-400 rounded-full w-full"
        onClick={handleMenuToggle}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-md z-10">
          <button
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full bg-white text-left rounded-t-lg border-none"
            onClick={handleEdit}
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full bg-white text-left rounded-b-lg border-none"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;