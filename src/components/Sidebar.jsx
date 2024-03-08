import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGaugeHigh, faCube, faUser, faRocket, faLayerGroup, faMoneyBill1, faClock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProyectosMenuOpen, setIsProyectosMenuOpen] = useState(false);

  return (
    
    <div className="text-gray-100 text-xl bg-white">
      <button 
      type ="button"
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen}
        <FontAwesomeIcon icon={faBars} className="ml-2 text-gray-950" />
      </button>

      {isOpen && (
        <div className='fixed top-20 left-0 h-screen bg-slate-700 w-60'>          
          <div className='p-2.5 mt-1 flex items-center'>
           <NavLink to="/" className='text-[15px] text-gray-200 font-bold ml-3'>
            Main
            </NavLink>
          </div>
          <hr className='my-2 text-gray-600'></hr>

          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faGaugeHigh} />
            <NavLink to="/DashboardPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Dashboard
            </NavLink>
          </div>

          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faCube} />
            <NavLink to="/AppsPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Apps
            </NavLink>
          </div>

          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faUser} />
            <NavLink to="/ExpertPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Expertos
            </NavLink>
          </div>

          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white ml-5'>
          <NavLink to="/CustomerPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Clientes
            </NavLink>
          </div>

          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faRocket} />
            <span className='text-[15px] ml-4 text-gray-200'>Proyectos</span>
            <FontAwesomeIcon icon={faChevronDown} className='ml-14 text-bg-gray-100' onClick={() => setIsProyectosMenuOpen(!isProyectosMenuOpen)} />
          </div>

          {isProyectosMenuOpen && (
            <div className='ml-6 mt-2'>
            <div className='p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <NavLink to="/ProjectsPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Proyectos
            </NavLink>
            </div>

            <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <NavLink to="/TaskPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Tareas
            </NavLink>
            </div>

            <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <NavLink to="/TaskBoardPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Tablero de Tareas
            </NavLink>
            </div>
            </div>
          )}         
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faLayerGroup} />
            <NavLink to="/PreDiagnosisPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Pre Diagnostico
            </NavLink>
          </div>

          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faMoneyBill1} />
            <NavLink to="/BillingPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Facturación
            </NavLink>
          </div>

          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faClock} />
            <NavLink to="/ReportsPage" className='text-[15px] ml-4 text-gray-200 hover:text-white'>
            Reportes
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
