import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router";

const CreateProjectPage = () => {
  const Navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [cost, setCost] = useState("");
  const [comments, setComments] = useState("");
  const [isActive] = useState(true);
  const [projectManagerId, setProjectManagerId] = useState("");
  const [error, setError] = useState("");
  const openForm = (event) => {
    event.preventDefault();
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5153/api", {
        name,
        startDate,
        endDate,
        description,
        budget,
        cost,
        comments,
        isActive,
        projectManagerId,
      });
      if (response.status === 200) {
        Navigate("/ProjectsPage");
        setShowForm(false); // Ocultar formulario
      }
    } catch (error) {
      setError("Invalid Request");
    }
  };

  return (
    <div>
      <button
        className="bg-[#FF9B44] border-transparent text-white mx-1 rounded-full flex justify-center items-center"
        onClick={openForm}
      >
        Create Project
      </button>
      {/* Formulario de creación de proyecto */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg z-50 relative flex w-[70%]">
            <FontAwesomeIcon
              icon={faTimes}
              className="absolute top-0 right-0 m-6 text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={closeForm}
            />
            <div className="w-full">
              <h2 className=" text-2xl font-semibold mb-4 text-center">
                Create Project
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="w-1/2 pr-4">
                    <div className="mb-4">
                      <label
                        htmlFor="projectName"
                        className="block text-sm font-bold text- text-gray-700"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="projectName"
                        name={name}
                        onChange={(event) => setName(event.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="startDate"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Start Date
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="categories"
                        className="block text-sm font-bold text-gray-700 hover:border-collapse"
                      >
                        Categories
                      </label>
                      <select
                        id="categories"
                        name="categories"
                        className="mt-1 p-2 border rounded-md w-full"
                      >
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="subcategories"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Subcategories
                      </label>
                      <select
                        id="subcategories"
                        name="subcategories"
                        className="mt-1 p-2 border rounded-md w-full"
                      >
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                      </select>
                    </div>
                    <div className="mb-4 flex">
                      <div className="w-1/2 mr-2">
                        <label
                          htmlFor="rate"
                          className="block text-sm font-bold text-gray-700"
                        >
                          Budget
                        </label>
                        <input
                          type="number"
                          id="rate"
                          name={budget}
                          onChange={(event) => setBudget(event.target.value)}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      <div className="w-1/2 mr-2">
                        <label
                          htmlFor="rate"
                          className="block text-sm font-bold text-gray-700"
                        >
                          Cost
                        </label>
                        <input
                          type="number"
                          id="rate"
                          name={cost}
                          onChange={(event) => setCost(event.target.value)}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="options"
                          className="block text-sm font-bold text-gray-700"
                        >
                          Options
                        </label>
                        <select
                          id="options"
                          name="options"
                          className="mt-1 p-2 border rounded-md w-full"
                        >
                          <option value="option1">Hourly</option>
                          <option value="option2">Fixed</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="projectLeader"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Add Project Leader
                      </label>
                      <input
                        type="text"
                        id="projectLeader"
                        name={projectManagerId}
                        onChange={(event) =>
                          setProjectManagerId(event.target.value)
                        }
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="team"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Add Team
                      </label>
                      <input
                        type="text"
                        id="team"
                        name="team"
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 pl-4">
                    <div className="mb-4">
                      <label
                        htmlFor="client"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Client
                      </label>
                      <select
                        id="client"
                        name="client"
                        className="mt-1 p-2 border rounded-md w-full"
                      >
                        <option value="option1">Global Technologies</option>
                        <option value="option2">InfoTech View</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="endDate"
                        className="block text-sm font-bold text-gray-700"
                      >
                        End Date
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name={endDate}
                        onChange={(event) => setEndDate(event.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="priority"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Priority
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        className="mt-1 p-2 border rounded-md w-full"
                      >
                        <option value="option1">High</option>
                        <option value="option2">Medium</option>
                        <option value="option3">Low</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name={description}
                        onChange={(event) => setDescription(event.target.value)}
                        rows="4"
                        className="mt-1 p-2 border rounded-md w-full"
                      ></textarea>
                    </div>
                    {/* Sección para subir archivos */}
                    <div className="mb-4">
                      <label
                        htmlFor="files"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Upload Files
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  {" "}
                  {/* Este div centra el botón de submit */}
                  <button
                    type="submit"
                    className="bg-[#FF9B44] text-white px-4 py-2 rounded-md hover:bg-opacity-80"
                  >
                    Submit
                  </button>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Comments
                  </label>
                  <textarea
                    id="description"
                    name={comments}
                    onChange={(event) => setComments(event.target.value)}
                    rows="4"
                    className="mt-1 p-2 border rounded-md w-full"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateProjectPage;
