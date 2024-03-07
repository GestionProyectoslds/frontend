import React from 'react';

const ActivitiesCountList = ({ activitiesCountByStatus }) => (
  <ul>
    {activitiesCountByStatus.map((item, index) => (
      <li key={index}>
        Status: {item.status}, Count: {item.count}
      </li>
    ))}
  </ul>
);

export default ActivitiesCountList;