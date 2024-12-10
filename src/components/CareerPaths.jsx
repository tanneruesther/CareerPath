import React from 'react';
import Roadmap from '../pages/RoadMap'; 

const CareerPaths = ({ domain }) => {
  return (
    <div className="career-paths">
      <h2>{domain.domain} Career Paths</h2>
      <p>{domain.description}</p>

      <h3>Opportunities</h3>
      <div className="opportunities-list">
        {domain.opportunities?.map((opportunity, index) => (
          <div key={index} className="opportunity">
            <h4>{opportunity.opportunity}</h4>
            <p>{opportunity.resources?.where_to_learn?.join(', ') || 'No resources available'}</p> 
            <Roadmap roadmap={opportunity.resources} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default CareerPaths;
