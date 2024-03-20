import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faDollarSign, faGem, faUser } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import Array from '../components/Array';

const DashboardPage = () => {
  const [progress, setProgress] = useState(0);

  const handleMouseDown = (e) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const container = document.querySelector('.progress-bar');
    const containerWidth = container.offsetWidth;
    const newPosition = Math.max(0, Math.min(e.clientX - container.offsetLeft, containerWidth));
    const newProgress = Math.round((newPosition / containerWidth) * 100);
    setProgress(newProgress);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('token'); // Obtenemos el token desde la cookie
      if (!token) {
        // Si no encuentra el token...
        console.error('Token no encontrado');
        return;
      }
      const config = {
        headers: { Authorization: `bearer ${token}` }
      };
      try {
        const response = await axios.get('http://localhost:5153/api/Statistics', config);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); // Empty array means this effect runs once on mount
  if (!data) {
    return <div className='flex items-center justify-center h-screen'>
      <div role="status">
        <svg aria-hidden="true" class="w-24 h-24 text-gray-200 animate-spin dark:text-gray-300 fill-[#1A6FA8]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <label class="sr-only text-black">Loading...</label>
      </div>
    </div>;
  }

  return (
    <div>
      <Header />
      <div className='ml-20 mr-20'>
        <h1 className='ml-5 mr-20 text-2xl font-bold mt-5'>Welcome Admin!</h1>
        <h1 className='text-base text-gray-400 sm:text-lg ml-5 mt-2 font-bold'>Dashboard</h1>
        <div className=" mx-auto flex flex-wrap">
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white border rounded-md shadow-md p-4">
              <FontAwesomeIcon icon={faCubes} color="orange" size='2x' />
              <form className='flex justify-between mt-5'>
                <h2 className="text-lg font-bold mb-2 text-gray-950 sm:text-lg">Proyectos</h2>
                <h2 className="text-xl font-bold mb-2 text-gray-950 mr-10 sm:text-lg">{data.activeProjectsCount}</h2>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white border rounded-md shadow-md p-4">
              <FontAwesomeIcon icon={faDollarSign} color="orange" size='2x' />
              <form className='flex justify-between mt-5'>
                <h2 className="text-lg font-bold mb-2 text-gray-950 sm:text-lg">Clientes</h2>
                <h2 className="text-xl font-bold mb-2 text-gray-950 mr-9 sm:text-lg">{data.normalUsersCount}</h2>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white border rounded-md shadow-md p-4">
              <FontAwesomeIcon icon={faGem} color="orange" size='2x' />
              <form className='flex justify-between  mt-5'>
                <h2 className="text-lg font-bold mb-2 stext-gray-950 sm:text-lg">Tareas</h2>
                <h2 className="text-xl font-bold mb-2 text-gray-950 mr-9 sm:text-lg">{data.activitiesCount}</h2>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white border rounded-md shadow-md p-4">
              <FontAwesomeIcon icon={faUser} color="orange" size='2x' />
              <form className='flex justify-between  mt-5'>
                <h2 className="text-lg font-bold mb-2 text-gray-950 sm:text-lg">Expertos</h2>
                <h2 className="text-xl font-bold mb-2 text-gray-950 mr-9 sm:text-lg">{data.expertUsersCount}</h2>
              </form>
            </div>
          </div>
        </div>


        <div className='mx-auto flex flex-row'>
          <div className='w-full p-4'>
            <div className='bg-white border rounded-md p-4'>
              <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Estadísticas de Tareas</h2>
              <form className='flex justify-between'>
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white border rounded-md shadow-md p-4">
                    <form action="">
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Tareas Totales</h2>
                    </form>
                    <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">{data.activitiesCount}</h2>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white border rounded-md shadow-md p-4">
                    <form action="">
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Tareas Atrasadas</h2>
                    </form>
                    <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">{data.overdueActivitiesCount}</h2>
                  </div>
                </div>
              </form>
              <div className='bg-white border rounded-md p-4'>
                <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Estadísticas</h2>
                <div className='bg-white'>
                  <div className=' border rounded-md p-4 mt-3'>
                    <form className='flex justify-between'>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> Hoy Salir</h2>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 0</h2>
                    </form>
                    {/*<div className="progress-container">
                      <div className="progress-bar" onMouseDown={handleMouseDown}>
                        <div className="progress" style={{ width: `${progress}%`}}></div>
                      </div>
                    </div>*/}
                  </div>

                  <div className=' border rounded-md p-4 mt-2'>
                    <form className='flex justify-between'>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Factura Pendiente</h2>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 0</h2>
                    </form>
                    {/*<div className="progress-container">
                      <div className="progress-bar" onMouseDown={handleMouseDown}>
                        <div className="progress" style={{ width: `${progress}%`}}></div>
                      </div>
                    </div>*/}
                  </div>

                  <div className=' border rounded-md p-4 mt-2'>
                    <form className='flex justify-between'>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Proyectos Completados</h2>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 0</h2>
                    </form>
                    {/*<div className="progress-container">
                      <div className="progress-bar" onMouseDown={handleMouseDown}>
                        <div className="progress" style={{ width: `${progress}%`}}></div>
                      </div>
                    </div>*/}
                  </div>

                  <div className=' border rounded-md p-4 mt-2'>
                    <form className='flex justify-between'>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Entradas Abiertas</h2>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 0</h2>
                    </form>
                    {/*<div className="progress-container">
                      <div className="progress-bar" onMouseDown={handleMouseDown}>
                        <div className="progress" style={{ width: `${progress}%`}}></div>
                      </div>
                    </div>*/}
                  </div>

                  <div className='border rounded-md p-4 mt-2'>
                    <form className='flex justify-between'>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Entradas Cerradas</h2>
                      <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 0</h2>
                    </form>
                    {/*<div className="progress-container">
                      <div className="progress-bar" onMouseDown={handleMouseDown}>
                        <div className="progress" style={{ width: `${progress}%`}}></div>
                      </div>
                    </div>*/}
                  </div>

                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4'>
              <div className='bg-white border rounded-md p-4'>
                <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Estadísticas de Tareas</h2>
                <form className='flex justify-between'>
                  <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                      <form className="text-center">
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Tareas Totales</h2>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-5xl">{data.activitiesCount}</h2>
                      </form>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                      <form className="text-center">
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Tareas Atrasadas</h2>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-5xl">{data.overdueActivitiesCount}</h2>
                      </form>
                    </div>
                  </div>
                </form>
                {/*<div className="progress-container">
                      <div className="progress-bar" onMouseDown={handleMouseDown}>
                        <div className="progress" style={{ width: `${progress}%`}}></div>
                      </div>
                    </div>*/}
                <div className='bg-white mt-10'>
                  <Array activitiesCountByStatus={data.activitiesCountByStatus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;