import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie"; // Importa js-cookie para manejar cookies

const PriorityDropdown = ({ priority, projectId }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handlePriorityChange = async (priority) => {
        try {
            const token = Cookies.get("token"); // Obtiene el token de la cookie
            const response = await axios.put(
                "/api/Projects/update",
                {
                    id: projectId,
                    priority: priority
                },
                {
                    headers: {
                        Authorization: `bearer ${token}` // Agrega el token como encabezado de autorización
                    }
                }
            );
            if (response.status === 200) {
                console.log("Prioridad actualizada en el backend:", priority);
            }
        } catch (error) {
            console.error("Error al actualizar la prioridad:", error);
        }
        setShowDropdown(false);
    };

    const mapPriority = (priority) => {
        switch (priority) {
            case 1:
                return { label: "Low", color: "#699834" };
            case 2:
                return { label: "Medium", color: "#FFBC34" };
            case 3:
                return { label: "High", color: "#F62D51" };
            default:
                return { label: "Unknown", color: "#000000" };
        }
    };

    const { label, color } = mapPriority(priority);

    return (
        <div className="priority-dropdown relative">
            <button className="dropdown-toggle px-4 py-1 border border-gray-400 bg-white rounded-full flex items-center w-full justify-between" type="button" onClick={() => setShowDropdown(!showDropdown)}>
                <React.Fragment>
                    <FontAwesomeIcon icon={faCircleDot} style={{ color: color, marginRight: "5px" }} />
                    {label}
                </React.Fragment>
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {showDropdown && (
                <div className="dropdown-menu absolute top-full left-0 z-50 bg-white border border-gray-400 rounded-lg w-full flex items-center justify-between shadow-md">
                    <ul className="list-none p-0 m-0 w-full">
                        <li className="px-2 py-2 cursor-pointer rounded-t-lg hover:bg-gray-100" onClick={() => handlePriorityChange(1)}>
                            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#699834", marginRight: "5px" }} />
                            Low
                        </li>
                        <li className="px-2 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handlePriorityChange(2)}>
                            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#FFBC34", marginRight: "5px" }} />
                            Medium
                        </li>
                        <li className="px-2 py-2 cursor-pointer rounded-b-lg hover:bg-gray-100" onClick={() => handlePriorityChange(3)}>
                            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#F62D51", marginRight: "5px" }} />
                            High
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PriorityDropdown;
