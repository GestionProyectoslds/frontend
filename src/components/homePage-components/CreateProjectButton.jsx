import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CreateProjectButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState("");

    const openForm = (event) => {
        event.preventDefault();
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const handleFileChange = (event) => {
        const fileList = event.target.files;
        const fileArray = Array.from(fileList);
        setFiles(fileArray);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
                 const response = await axios.post(
                     "http://localhost:5153/api",
                     {
                         projectName,
                         startDate,
                         categories,
                         subcategories,
                         rate,
                         number,
                         options,
                         projectLeader,
                         client,
                         endDate,
                         priority,
                         description,
                         files,
                     }
                 );
                 if (response.status === 200) {
                     console.log(response.data);
                     navigate("/ProjectsPage");
                     setShowForm(false); // Ocultar formulario
                 };
             } catch (error) {
                 setError("Invalid Request")
             }
        setShowForm(false); // Ocultar formulario

        const handleFileChange = (event) => {
            const fileList = event.target.files;
            const fileArray = Array.from(fileList);
            setFiles(fileArray);
        };
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
                                                name="projectName"
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
                                                name="startDate"
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
                                                className="mt-1 p-2 border rounded-md w-full  "
                                            >
                                                <option value="" disabled selected>Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option className="hover:bg-red-500" value="option3">
                                                    Option 3
                                                </option>
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
                                                <option value="" disabled selected>Select</option>
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
                                                    Rate
                                                </label>
                                                <input
                                                    type="number"
                                                    id="rate"
                                                    name="rate"
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
                                                name="projectLeader"
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
                                                <option value="" disabled selected>Select</option>
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
                                                name="endDate"
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
                                                <option value="" disabled selected>Select</option>
                                                <option className= "  " value="option1">High</option>
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
                                                name="description"
                                                rows="4"
                                                className="mt-1 p-2 border rounded-md w-full"
                                            ></textarea>
                                        </div>

                                        {/* Sección para subir archivos */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-bold text-gray-700">Upload File</label>
                                            <label class="block">
                                                <span class="sr-only">Choose file</span>
                                                <input
                                                    type="file"
                                                    class="block w-full text-sm text-slate-500
                                                    file:mr-4 file:py-2 file:px-4
                                                    file:rounded-full file:border-0
                                                    file:text-sm file:font-semibold
                                                    file:bg-black-50 file:text-gray-700
                                                    hover:file:bg-gray-300"
                                                />
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
                            </form>
                        </div>
                    </div>
                </div>
            )}
            
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateProjectButton;