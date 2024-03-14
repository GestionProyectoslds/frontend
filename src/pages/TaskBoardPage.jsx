import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faLink, faEllipsisV, faClock, faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
          <label className=' mr-20 text-2xl font-bold'>Project Name</label>
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

        <div className="flex items-center mt-4">
          <label className="text-base font-bold mr-2">Progress</label>
          <div className="w-full bg-gray-200 rounded-full dark:bg-[#E3E3E3]">
            <div className="bg-[#55CE63] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: `${progressPercentage}%` }}>
              {progressPercentage}%
            </div>
          </div>
        </div>




        {/* Nueva sección con rectángulos verticales */}
        <div className="flex mt-4">
          {/* Rectángulo Pending */}
          <section className="flex-1">
            <div className="flex-1 bg-[#EF5350] h-10 flex items-center justify-between">
              <span className="text-white text-base font-bold ml-5">Pending</span>
              <FontAwesomeIcon icon={faEllipsisV} className="text-white mr-5" />
            </div>
            {/* ----------------- Ésta parte sería el componente de cada actividad -------------- */}
            {/*Parte 1 */}
            <div className="bg-[#FEF7F6] w-full pt-4">
              <div className="bg-white border border-[#E3E3E3] mx-4 mb-4">
                <div className="my-2 mx-4">
                  <div className=" flex justify-between">
                    <label className="text-sm font-bold">Website Redesign</label>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="flex items-center my-2"> {/* Contenedor del texto y la barra de progreso */}
                    <div class="w-full bg-gray-300 rounded-full h-1.5"> {/* Barra de progreso */}
                      <div class="bg-[#EF5350] h-1.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <label className="ml-1">Sep 26</label>
                  </div>
                  <div className="text-sm flex justify-between">
                    <div className="bg-[#FDE2E7] rounded-full">
                      <label className=" text-[#EF5350] text-xs font-bold mx-2">High</label>
                    </div>
                    <div>
                      <label>Usuarios</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <label className=" font-semibold mb-4">Add New Task</label>
              </div>
            </div>
          </section>

          {/* Rectángulo In Progress */}
          <section className="flex-1 rounded-lg ml-4">
            <div className="flex-1 bg-[#42A5F5] h-10 flex items-center justify-between">
              <span className="text-white text-base font-bold ml-5">Completed</span>
              <FontAwesomeIcon icon={faEllipsisV} className="text-white mr-5" />
            </div>
            {/* ----------------- Ésta parte sería el componente de cada actividad -------------- */}
            <div className="bg-[#E7F3FE] w-full h-full pt-3">
              <div className="bg-white border border-[#E3E3E3] mt-3 mx-4 -mb-3">
                <div className="my-2 mx-4">
                  <label className="text-sm font-bold">Website Redesign</label>
                  <div className="flex items-center my-2"> {/* Contenedor del texto y la barra de progreso */}
                    <div class="w-full bg-gray-300 rounded-full h-1.5"> {/* Barra de progreso */}
                      <div class="bg-[#42A5F5] h-1.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <label className="ml-1">Sep 26</label>
                  </div>
                  <div className="text-sm flex justify-between">
                    <label>Prioridad</label>
                    <label>Usuarios</label>
                  </div>
                </div>
              </div>
            </div>
            {renderActivities(pendingActivities)}
          </section>


          {/* Rectángulo Completed */}
          <section className="flex-1 rounded-lg ml-4">
            <div className="flex-1 bg-[#4CAF50] h-10 flex items-center justify-between">
              <span className="text-white text-base font-bold ml-5">Completed</span>
              <FontAwesomeIcon icon={faEllipsisV} className="text-white mr-5" />
            </div>
            {/* ----------------- Ésta parte sería el componente de cada actividad -------------- */}
            <div className="bg-[#EDF7EE] w-full h-full pt-3">
              <div className="bg-white border border-[#E3E3E3] mt-3 mx-4 -mb-3">
                <div className="my-2 mx-4">
                  <label className="text-sm font-bold">Website Redesign</label>
                  <div className="flex items-center my-2"> {/* Contenedor del texto y la barra de progreso */}
                    <div class="w-full bg-gray-300 rounded-full h-1.5"> {/* Barra de progreso */}
                      <div class="bg-[#4CAF50] h-1.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <label className="ml-1">Sep 26</label>
                  </div>
                  <div className="text-sm flex justify-between">
                    <label>Prioridad</label>
                    <label>Usuarios</label>
                  </div>
                </div>
              </div>
            </div>
            {renderActivities(pendingActivities)}
          </section>
        </div>

        {/* Modal para crear lista */}
        {showCreateListModal && <CreateList onClose={closeCreateListModal} />}
      </form>
    </div>
  );
};

export default TaskBoardPage;
