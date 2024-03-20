import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTableCells, faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Cookies from "js-cookie";

const CreateProjectButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState("");
    const [description, setDescription] = useState("");
    const [projectName, setProjectName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [budget, setBudget] = useState("");
    const navigate = useNavigate();
    const quillRef = useRef(null); // Referencia para el editor de Quill

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
            const token = Cookies.get('token');
            console.log("Token:", token); // Agrega un console log para verificar el token obtenido

            if (!token) {
                console.error('Token no encontrado');
                return;
            }
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const defaultData = {
                // Valores predeterminados
                cost: 0,
                comments: "Comentarios no proporcionados",
                isActive: true,
                projectManagerId: 0
            };
            const formData = {
                name: projectName,
                startDate,
                endDate,
                description,
                budget
            };
            const requestData = { ...defaultData, ...formData }; // Combinar valores predeterminados con datos del formulario
            console.log("Request Data:", requestData); // Agrega un console log para verificar los datos que se enviarán al servidor

            const response = await axios.post(
                "http://localhost:5153/api/Projects/create",
                requestData,
                config // Pasar la configuración con el token
            );
            console.log("Response:", response.data); // Agrega un console log para verificar la respuesta del servidor

            if (response.status === 200) {
                console.log(response.data);
                navigate("/ProjectsPage");
                setShowForm(false);
            }
        } catch (error) {
            setError("Invalid Request")
        }
    };




    useEffect(() => {
        if (showForm) {
            const quill = new Quill(quillRef.current, {
                theme: "snow",
                placeholder: "Write something...",
            });
            quill.on("text-change", () => {
                setDescription(quill.root.innerHTML); // Actualiza el estado con el contenido del editor
            });
        }
    }, [showForm]);

    return (
        <div>
            <div className="flex justify-end pb-1 h-12">
                <button
                    type="button"
                    onClick={() => navigate("/ProjectsPage")}
                    className="bg-white border border-[#E3E3E3] rounded-lg w-auto flex justify-center items-center"
                >
                    <FontAwesomeIcon icon={faTableCells} className="" />
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/Projectmenu")}
                    className="bg-white border border-[#E3E3E3] ml-2  rounded-lg w-auto flex justify-center items-center"
                >
                    <FontAwesomeIcon icon={faBars} className="" />
                </button>
                <button
                    className="bg-[#FF9B44] border-transparent text-white ml-2 rounded-full flex justify-center items-center"
                    onClick={openForm}
                >
                    Create Project
                </button>
            </div>
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
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="flex">
                                    <div className="w-1/2 pr-4">
                                        {/* Columna izquierda */}
                                        <div className="mb-4">
                                            <label
                                                htmlFor="projectName"
                                                className="block text-sm font-bold text-gray-700"
                                            >
                                                Project Name
                                            </label>
                                            <input
                                                type="text"
                                                id="projectName"
                                                name="projectName"
                                                className="mt-1 p-2 border rounded-md w-full"
                                                value={projectName}
                                                onChange={(e) => setProjectName(e.target.value)}
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
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
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
                                                <option value="" disabled>Select</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
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
                                                    htmlFor="budget"
                                                    className="block text-sm font-bold text-gray-700"
                                                >
                                                    Budget
                                                </label>
                                                <input
                                                    type="number"
                                                    id="budget"
                                                    name="budget"
                                                    className="mt-1 p-2 border rounded-md w-full"
                                                    value={budget} // Agrega el valor del estado budget al campo
                                                    onChange={(e) => setBudget(e.target.value)} // Actualiza el estado budget cuando cambia el valor del campo
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
                                    </div>
                                    <div className="w-1/2 pl-4">
                                        {/* Columna derecha */}
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
                                                <option value="" disabled>Select</option>
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
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
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
                                                <option value="" disabled>Select</option>
                                                <option value="option1">High</option>
                                                <option value="option2">Medium</option>
                                                <option value="option3">Low</option>
                                            </select>

                                        </div>

                                    </div>
                                </div>
                                {/* Descripción */}
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-bold text-gray-700 mt-2"
                                    >
                                        Description
                                    </label>
                                    <div ref={quillRef} style={{ height: "200px" }} />
                                </div>

                                {/* Botón de submit */}
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
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
