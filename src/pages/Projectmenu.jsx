import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import SearchButton from '../components/sidebarProyects-components/SearchButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import StatusDropdown from "../components/homePage-components/StatusDropdown";
import PriorityDropdown from "../components/homePage-components/PriorityDropdown";
import ActionDropdown from "../components/homePage-components/ActionDropdown";
import CreateProjectButton from "../components/homePage-components/CreateProjectButton";
import Cookies from "js-cookie";
import axios from "axios";

const Dashboard = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    obtenerProyectos();
  }, []);

  const obtenerProyectos = async () => {
    try {
      const token = Cookies.get('token');

      if (!token) {
        console.error('Token no encontrado');
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const response = await axios.post(
        "http://localhost:5153/api/Projects/filterProjects",
        {},
        config
      );

      setProjects(response.data);
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
    }
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };
  

  return (
    <div>
      <Header />
      <div className="mx-20">
        <div className="mt-5">
          <label className='text-2xl font-bold mt-10'>Project</label>
        </div>

        <div className="flex items-center justify-between mt-2">
          <label className="text-base font-bold">Dashboard</label>
          <CreateProjectButton />
        </div>
        <div className="mt-4 mb-4">
          <SearchButton />
        </div>

        <div className=" w-auto mx-auto border-gray-500 rounded-xl max-h-[650px]">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="sticky top-0 bg-white z-10">
                <th
                  className="border-b border-gray-300 px-4 py-3 text-base"
                  style={{ width: "30%" }}
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center">
                    Project
                    <div className="ml-auto">
                      {sortBy === "name" && (
                        <FontAwesomeIcon
                          icon={sortDirection === "asc" ? faSortUp : faSortDown}
                          className="ml-1"
                        />
                      )}
                      {!sortBy && (
                        <FontAwesomeIcon icon={faSort} className="ml-1" />
                      )}
                    </div>
                  </div>
                </th>
                <th
                  className="border-b border-gray-300 px-4 py-3 text-base"
                  style={{ width: "20%" }}
                  onClick={() => handleSort("projectid")}
                >
                  <div className="flex items-center">
                    ProjectID
                    <div className="ml-auto">
                      {sortBy === "projectid" && (
                        <FontAwesomeIcon
                          icon={sortDirection === "asc" ? faSortUp : faSortDown}
                          className="ml-1"
                        />
                      )}
                      {!sortBy && (
                        <FontAwesomeIcon icon={faSort} className="ml-1" />
                      )}
                    </div>
                  </div>
                </th>
                <th
                  className="border-b border-gray-300 px-4 py-3 text-base"
                  style={{ width: "20%" }}
                  onClick={() => handleSort("deadline")}
                >
                  <div className="flex items-center">
                    Deadline
                    <div className="ml-auto">
                      {sortBy === "deadline" && (
                        <FontAwesomeIcon
                          icon={sortDirection === "asc" ? faSortUp : faSortDown}
                          className="ml-1"
                        />
                      )}
                      {!sortBy && (
                        <FontAwesomeIcon icon={faSort} className="ml-1" />
                      )}
                    </div>
                  </div>
                </th>
                <th
                  className="border-b border-gray-300 px-4 py-3 text-base"
                  style={{ width: "10%" }}
                >
                  <div className="flex items-center">
                    Status
                  </div>
                </th>
                <th
                  className="border-b border-gray-300 px-4 py-3 text-base"
                  style={{ width: "10%" }}
                  onClick={() => handleSort("priority")}
                >
                  <div className="flex items-center">
                    Priority
                    <div className="ml-auto">
                      {sortBy === "priority" && (
                        <FontAwesomeIcon
                          icon={sortDirection === "asc" ? faSortUp : faSortDown}
                          className="ml-1"
                        />
                      )}
                      {!sortBy && (
                        <FontAwesomeIcon icon={faSort} className="ml-1" />
                      )}
                    </div>
                  </div>
                </th>
                <th
                  className="border-b border-gray-300 px-4 py-3 text-base"
                  style={{ width: "5%" }}
                >
                  <div className="flex items-center">
                    Action
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {projects.map((project, index) => (
                <tr
                  key={project.id}
                  className={index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"}
                >
                  <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                    {project.name}
                  </td>
                  <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                    {project.id}
                  </td>
                  <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                    {formatDate(project.endDate)}
                  </td>
                  <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                    <StatusDropdown
                      status={project.isActive ? "true" : "false"}
                      projectId={project.id}
                      onStatusChange={(isActive) =>
                        handleStatusChange(isActive)
                      }
                    />
                  </td>
                  <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                    {/**     <StatusDropdown
                      status={project.isActive ? "true" : "false"}
                      projectId={project.id}
                      onStatusChange={(isActive) =>
                        handleStatusChange(isActive)
                      }
                    />*/}
                  </td>
                  <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                  {/**  <PriorityDropdown
                      priority={project.priority}
                      projectId={project.projectid}
                      onStatusChange={handlePriorityChange}
                    />*/}
                  </td>
                  <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                   {/** <ActionDropdown
                      onEdit={() => handleEditProject(project.id)}
                      onDelete={() => handleDeleteProject(project.id)}
                    />*/}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
