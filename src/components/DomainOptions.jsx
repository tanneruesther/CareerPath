import React, { useState } from 'react';
import Roadmap from '../pages/RoadMap';


const DomainOptions = ({ domainsData }) => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const handleOpportunityClick = (opportunity) => {
    setSelectedOpportunity(opportunity);
  };

  return (
    <div className="domain-options">
      <h2>Select a Domain and Explore Opportunities</h2>
      {domainsData.domains.map((domain) => (
        <div key={domain.domain}>
          <h3>{domain.domain}</h3>
          {domain.opportunities.map((opportunity, index) => (
            <div key={index} className="opportunity">
                <h4 onClick={() => handleOpportunityClick(opportunity)}>{opportunity.opportunity}</h4>
            </div>
          ))}
        </div>
      ))}

      {selectedOpportunity && (
        <div className="roadmap-container">
          <Roadmap roadmap={selectedOpportunity.roadmap} />
        </div>
      )}
    </div>
  );
};

export default DomainOptions;
