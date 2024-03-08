import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const StatusDropdown = ({ status, projectId, onStatusChange }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleStatusChange = (status) => {
        onStatusChange(projectId, status);
        setShowDropdown(false);
    };

    const statusBoolean = status === "true";

    return (
        <div className="status-dropdown relative">
            <button className="dropdown-toggle bg-white px-4 py-1 w-full border border-gray-400 rounded-full flex items-center justify-between" type="button" onClick={() => setShowDropdown(!showDropdown)}>
                {statusBoolean ? (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#699834", marginRight: "5px" }} />
                        Active
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faTimesCircle} style={{ color: "#F62D51", marginRight: "5px" }} />
                        Inactive
                    </React.Fragment>
                )}
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {showDropdown && (
                <div className="dropdown-menu absolute top-full left-0 z-50 bg-white border border-gray-400 rounded-lg w-full flex items-center justify-between shadow-md">
                    <ul className="list-none p-0 m-0 w-full">
                        <li className="px-2 py-2 cursor-pointer rounded-t-lg hover:bg-gray-100" onClick={() => handleStatusChange(true)}>
                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#699834", marginRight: "5px" }} />
                            <span>Active</span>
                        </li>
                        <li className="px-2 py-2 cursor-pointer rounded-b-lg hover:bg-gray-100" onClick={() => handleStatusChange(false)}>
                            <FontAwesomeIcon icon={faTimesCircle} style={{ color: "#F62D51", marginRight: "5px" }} />
                            <span>Inactive</span>
                        </li>
                    </ul>
                </div>
            )}
            
        </div>
    );
};

export default StatusDropdown;
