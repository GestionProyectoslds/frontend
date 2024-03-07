import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faDollarSign, faGem, faUser, faCircleDot } from '@fortawesome/free-solid-svg-icons';

const getData = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        const response = await axios.get('http://localhost:5153/api/Statistics', config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const DashboardPage = () => {
    return(

    <div>
        <Header/>
        <h1 className='text-lg sm:text-lg mt-5 ml-5'>Welcome Admin !</h1>
        <h1 className='text-base text-gray-400 sm:text-lg ml-5'>Dashboard</h1>
        <div className=" mx-auto flex flex-wrap">
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faCubes} color="orange" size='2x'/>
                        <form className='flex justify-between mt-5'>
                            <h2 className="text-lg font-bold mb-2 text-gray-950 sm:text-lg">Proyectos</h2>
                            <h2 className="text-xl font-bold mb-2 text-gray-950 mr-10 sm:text-lg">112</h2>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faDollarSign} color="orange" size='2x'/>
                        <form className='flex justify-between mt-5'>
                            <h2 className="text-lg font-bold mb-2 text-gray-950 sm:text-lg">Clientes</h2>
                            <h2 className="text-xl font-bold mb-2 text-gray-950 mr-9 sm:text-lg">44</h2>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faGem} color="orange" size='2x'/>
                        <form className='flex justify-between  mt-5'>
                            <h2 className="text-lg font-bold mb-2 text-gray-950 sm:text-lg">Tareas</h2>
                            <h2 className="text-xl font-bold mb-2 text-gray-950 mr-9 sm:text-lg">37</h2>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <div className="bg-white border rounded-md shadow-md p-4">
                        <FontAwesomeIcon icon={faUser} color="orange" size='2x'/>
                        <form className='flex justify-between  mt-5'>
                            <h2 className="text-lg font-bold mb-2 text-gray-950 sm:text-lg">Expertos</h2>
                            <h2 className="text-xl font-bold mb-2 text-gray-950 mr-9 sm:text-lg">218</h2>
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
                                    <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">385</h2>
                                </div>
                            </div>    
                            <div className="w-full md:w-1/2 p-4">
                                <div className="bg-white border rounded-md shadow-md p-4">
                                    <form action="">
                                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">Tareas Atrasadas</h2>
                                    </form>
                                <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">19</h2>
                                </div>
                            </div>
                        </form>
                <div className='bg-white border rounded-md p-4'>                    
                    <form className='flex justify-between  mt-5'>
                    <FontAwesomeIcon icon={faCircleDot} color='Purple'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> Tareas Completadas</h2>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 166</h2>
                    </form>
                    <form className='flex justify-between  mt-5'>
                    <FontAwesomeIcon icon={faCircleDot} color='Pink'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> Tareas en Curso</h2>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 115</h2>
                    </form>
                    <form className='flex justify-between  mt-5'>
                    <FontAwesomeIcon icon={faCircleDot} color='Green'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> Tareas en Espera</h2>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 31</h2>
                    </form>
                    <form className='flex justify-between  mt-5'>
                    <FontAwesomeIcon icon={faCircleDot} color='Red'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> Tareas Pendientes</h2>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 47</h2>
                    </form>
                    <form className='flex justify-between  mt-5'>
                    <FontAwesomeIcon icon={faCircleDot} color='Blue'/>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> Tareas a Revisar</h2>
                        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg"> 5</h2>
                    </form>                    
                </div>
            </div>
            </div>
    </div>
</div>

    );
}

export default DashboardPage;
