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
    return <div>Loading...</div>;

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
          <div className='w-full md:w-1/2 p-4'>
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
  );
}
export default DashboardPage;