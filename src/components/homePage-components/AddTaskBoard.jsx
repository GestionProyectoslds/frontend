import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CreateList = ({ onClose }) => {
  const [taskBoardName, setTaskBoardName] = useState("");
  const [selectedColor, setSelectedColor] = useState("orange");
  const colors = ["orange", "green", "blue", "purple", "yellow", "red"];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Board Name:", taskBoardName);
    console.log("Selected Color:", selectedColor);
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
        <h2 className="text-2xl font-semibold mb-4">Add Task Board</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 w-full">
            <label htmlFor="taskBoardName" className="block text-sm font-bold text-gray-700">
              Task Board Name
            </label>
            <input
              type="text"
              id="taskBoardName"
              name="taskBoardName"
              value={taskBoardName}
              onChange={(e) => setTaskBoardName(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="taskBoardColor" className="block text-sm font-bold text-gray-700">
              Task Board Color
            </label>
            <div className="flex mt-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${color === selectedColor ? `border-2 border-${color}-500` : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                ></div>
              ))}
            </div>
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
