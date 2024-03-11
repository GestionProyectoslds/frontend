import React, { useState } from "react";
import Header from '../components/Header';
import SearchButton from '../components/sidebarProyects-components/SearchButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown, faBars, faTableCells, } from "@fortawesome/free-solid-svg-icons";
import StatusDropdown from "../components/homePage-components/StatusDropdown";
import PriorityDropdown from "../components/homePage-components/PriorityDropdown";
import ActionDropdown from "../components/homePage-components/ActionDropdown";
import CreateProjectButton from "../components/homePage-components/CreateProjectButton";


const Dashboard = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Microsoft Office",
      projectid: "PRO-0001",
      team: "+15",
      deadline: "17 Apr 2023",
      status: "true",
      priority: "High",
      action: "action",
    },
    {
      id: 2,
      name: "Project ",
      projectid: "PRO-0002",
      team: "+15",
      deadline: "17 Apr 2023",
      status: "false",
      priority: "Low",
      action: "bction",
    },
    {
      id: 3,
      name: "Video",
      projectid: "PRO-0003",
      team: "+15",
      deadline: "17 Apr 2023",
      status: "false",
      priority: "Medium",
      action: "action",
    },
    {
      id: 4,
      name: "Hospital",
      projectid: "PRO-0004",
      team: "+15",
      deadline: "15 Apr 2023",
      status: "true",
      priority: "High",
      action: "action",
    },
    {
      id: 5,
      name: "Office ",
      projectid: "PRO-0005",
      team: "+15",
      deadline: "19 Apr 2023",
      status: "true",
      priority: "Low",
      action: "bction",
    },
  ];

  const handleSort = (field) => {
    if (sortBy === field) {
      // Cambiar la dirección de ordenamiento si ya estamos ordenando por la misma columna
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Ordenar por una nueva columna
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  const sortedProjects = [...projects].sort((a, b) => {
    // Ordenamiento personalizado según la columna seleccionada y la dirección
    if (sortBy) {
      if (sortDirection === "asc") {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return b[sortBy].localeCompare(a[sortBy]);
      }
    }
    return 0;
  });

  const handleStatusChange = (projectId, status) => {
    // Lógica para manejar el cambio de estado
  };

  const handlePriorityChange = (projectId, priority) => {
    // Corregir aquí
    // Lógica para manejar el cambio de prioridad
  };

  return (
    <div>
    <Header />
    <form className="ml-20 mr-20">
      <div className="mt-5">
        <label className='text-2xl font-bold mt-10'>Project</label>
      </div>

      <div className="flex items-center mt-2 -mr-16">
        <label className="text-base font-bold">Dashboard</label>
        <div className="flex-grow" />
        <CreateProjectButton />
      </div>
      <div className="mt-4 mb-4"> {/* Agregado el margen superior aquí */}
        <SearchButton />
      </div>

      <div className=" overflow-auto w-auto mx-auto border-gray-500 rounded-xl">
        <table className="table-auto w-full text-left ">
          <thead>
            <tr className="">
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
                onClick={() => handleSort("team")}
              >
                <div className="flex items-center">
                  Team
                  <div className="ml-auto">
                  {sortBy === "team" && (
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
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center">
                  Status
                  <div className="ml-auto">
                  {sortBy === "status" && (
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
                onClick={() => handleSort("action")}
              >
                <div className="flex items-center">
                  Action
                  <div className="ml-auto">
                  {sortBy === "action" && (
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
            </tr>
          </thead>
          <tbody className="text-xs">
            {sortedProjects.map((project, index) => (
              <tr
                key={project.id}
                className={index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"}
              >
                <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                  {project.name}
                </td>
                <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                  {project.projectid}
                </td>
                <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                  {project.team}
                </td>
                <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                  {project.deadline}
                </td>





                <td className="border-b border-[#E2E5E8] px-4 py-3 text-base relative">
                  <StatusDropdown
                    status={project.status}
                    projectId={project.projectid}
                    onStatusChange={handleStatusChange}
                  />
                </td>

                <td className="border-b border-[#E2E5E8] px-4 py-3 text-base ">
                  <PriorityDropdown
                    priority={project.priority}
                    projectId={project.projectid}
                    onStatusChange={handlePriorityChange}
                  />
                </td>

                <td className="border-b border-[#E2E5E8] px-4 py-3 text-base">
                  <ActionDropdown
                    onEdit={() => handleEditProject(project.id)}
                    onDelete={() => handleDeleteProject(project.id)}
                  />
                </td>


                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
    </div>
  );
};

export default Dashboard;
