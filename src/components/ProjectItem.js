import React from 'react';

const ProjectItem = ({ id, name, about, technologies }) => {
  return (
    <div className="project-item">
      <h2>{name}</h2>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;

