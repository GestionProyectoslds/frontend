import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

const activitiesCountByStatus = ({ activitiesCountByStatus }) => (
  <ul className='border rounded-md p-4 mt-2 text-xl font-bold text-gray-950 sm:text-lg'>
    {activitiesCountByStatus.map((item, index) => (
      <li key={index}>
      <form className='flex justify-between mt-1'>
        <FontAwesomeIcon icon={faCircleDot}/>
        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">{item.status}</h2>
        <h2 className="text-xl font-bold mb-2 text-gray-950 sm:text-lg">{item.count}</h2>
      </form>
      </li>
    ))}
  </ul>
);

export default activitiesCountByStatus;