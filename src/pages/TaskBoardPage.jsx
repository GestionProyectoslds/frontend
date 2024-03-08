import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faLink, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CreateList from '../components/homePage-components/AddTaskBoard';

const TaskBoardPage = () => {
  const [progressPercentage, setProgressPercentage] = useState(45);
  const [pendingActivities, setPendingActivities] = useState([]);
  const [inProgressActivities, setInProgressActivities] = useState([]);
  const [completedActivities, setCompletedActivities] = useState([]);
  const [showCreateListModal, setShowCreateListModal] = useState(false);

  const openCreateListModal = () => {
    setShowCreateListModal(true);
  };

  const closeCreateListModal = () => {
    setShowCreateListModal(false);
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const pendingResponse = await axios.get("backend_url/activities/pending");
        setPendingActivities(pendingResponse.data);

        const inProgressResponse = await axios.get("backend_url/activities/inprogress");
        setInProgressActivities(inProgressResponse.data);

        const completedResponse = await axios.get("backend_url/activities/completed");
        setCompletedActivities(completedResponse.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  const renderActivities = (activities) => {
    if (!Array.isArray(activities)) {
      return <p>Error: Activities is not an array</p>;
    }

    return (
      <ul className="list-disc ml-6">
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Header />
      <form className="ml-20 mr-20">
        <div className="mt-5">
          <label className=' mr-20 text-2xl font-bold mt-10'>Project Name</label>
        </div>

        <div className=" mt-2">
          <label className="text-base font-bold">Dashboard / <span className=" font-medium">Task Board</span></label>
        </div>

        <div className="mt-7 flex justify-between items-center">
          <div>
            <label className="">Lead</label>
            <label className="ml-20">Team</label>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="ml-5 bg-white border-gray-300 rounded-lg"
              onClick={openCreateListModal}
            >
              <FontAwesomeIcon
                icon={faLink}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              />
            </button>

            <button
              type="button"
              className="ml-5 bg-white border-gray-300 rounded-lg"
              
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2"
              />
              Create List
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <label className="text-base font-bold mr-2">Progress</label>
          <div className="w-full bg-gray-200 rounded-full dark:bg-[#E3E3E3]">
            <div className="bg-[#55CE63] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: `${progressPercentage}%` }}>
              {progressPercentage}%
            </div>
          </div>
        </div>

        {/* Nueva sección con rectángulos verticales */}
        <div className="flex mt-5">
          {/* Rectángulo Pending */}
          <div className="flex-1 bg-red-500 p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-lg font-bold">Pending</span>
              <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
            </div>
            {renderActivities(pendingActivities)}
          </div>

          {/* Rectángulo In Progress */}
          <div className="flex-1 bg-blue-500 p-4 rounded-lg ml-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-lg font-bold">In Progress</span>
              <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
            </div>
            {renderActivities(inProgressActivities)}
          </div>

          {/* Rectángulo Completed */}
          <div className="flex-1 bg-green-500 p-4 rounded-lg ml-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-lg font-bold">Completed</span>
              <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
            </div>
            {renderActivities(completedActivities)}
          </div>
        </div>

        {/* Modal para crear lista */}
        {showCreateListModal && <CreateList onClose={closeCreateListModal} />}
      </form>
    </div>
  );
};

export default TaskBoardPage;
