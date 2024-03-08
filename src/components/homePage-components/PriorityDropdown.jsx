import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleDot } from "@fortawesome/free-solid-svg-icons";

const PriorityDropdown = ({ priority, projectId, onPriorityChange }) => {
    // Estado para controlar la visibilidad del menú desplegable
    const [showDropdown, setShowDropdown] = useState(false);

    // Función para manejar el cambio de prioridad
    const handlePriorityChange = (priority) => {
        // Llama a la función proporcionada desde el componente padre para manejar el cambio de prioridad
        onPriorityChange(projectId, priority);
        // Oculta el menú desplegable después de seleccionar una prioridad
        setShowDropdown(false);
    };

    return (
        // Contenedor principal del componente
        <div className="priority-dropdown relative">
            {/* Botón para abrir/cerrar el menú desplegable */}
            <button className="dropdown-toggle px-4 py-1 border border-gray-400 bg-white rounded-full flex items-center w-full justify-between" type="button" onClick={() => setShowDropdown(!showDropdown)}>
                {/* Muestra el ícono y el nombre de la prioridad actual */}
                {priority === "High" && (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faCircleDot} style={{ color: "#F62D51", marginRight: "5px" }} />
                        High
                    </React.Fragment>
                )}
                {priority === "Medium" && (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faCircleDot} style={{ color: "#FFBC34", marginRight: "5px" }} />
                        Medium
                    </React.Fragment>
                )}
                {priority === "Low" && (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faCircleDot} style={{ color: "#699834", marginRight: "5px" }} />
                        Low
                    </React.Fragment>
                )}
                {/* Ícono para indicar la acción de desplegar el menú */}
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {/* Menú desplegable para seleccionar la prioridad */}
            {showDropdown && (
                <div className="dropdown-menu absolute top-full left-0 z-50 bg-white border border-gray-400 rounded-lg w-full flex items-center justify-between shadow-md">
                    <ul className="list-none p-0 m-0 w-full">
                        {/* Opciones de prioridad */}
                        <li className="px-2 py-2 cursor-pointer rounded-t-lg hover:bg-gray-100" onClick={() => handlePriorityChange("High")}>
                            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#F62D51", marginRight: "5px" }} />
                            High
                        </li>
                        <li className="px-2 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handlePriorityChange("Medium")}>
                            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#FFBC34", marginRight: "5px" }} />
                            Medium
                        </li>
                        <li className="px-2 py-2 cursor-pointer rounded-b-lg hover:bg-gray-100" onClick={() => handlePriorityChange("Low")}>
                            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#699834", marginRight: "5px" }} />
                            Low
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PriorityDropdown;
