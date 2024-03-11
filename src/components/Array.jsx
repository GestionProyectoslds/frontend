import React from 'react';

const activitiesCountByStatus = ({ activitiesCountByStatus }) => (
  <ul>
    {activitiesCountByStatus.map((item, index) => (
      <li key={index}>
        Status: {item.status}, Count: {item.count}
      </li>
    ))}
  </ul>
);

export default activitiesCountByStatus;