import React from 'react';
import { useParams } from 'react-router-dom';
import domainsData from '../data/Domains.json';
import '../styles/roadmap.css'

const Roadmap = () => {
  const { domain, opportunityId } = useParams(); // Get the domain and opportunityId from URL

  // Find the selected domain data
  const selectedDomain = domainsData.find((d) => d.domain_name === domain);

  if (!selectedDomain) {
    return <p>No domain found for the given name.</p>;
  }

  // Find the selected opportunity data within the domain
  const selectedOpportunity = selectedDomain.opportunities.find(
    (opportunity) => opportunity.id === parseInt(opportunityId, 10) // Convert opportunityId to a number
  );

  if (!selectedOpportunity) {
    return <p>No opportunity found for the given ID.</p>;
  }

  // Render resources for the selected opportunity
  const renderResources = (resourceList, title) => {
    if (!resourceList || resourceList.length === 0) {
      return <p>No resources available for {title}.</p>;
    }

    return (
      <div className="resource-box">
        <h3>{title}</h3>
        <ul>
          {resourceList.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="roadmap">
      <h1>{selectedOpportunity.opportunity}</h1>
      <p>{selectedOpportunity.description}</p>

      {/* Display Resources */}
      <div className="resources-section">
        {renderResources(selectedOpportunity.resources?.where_to_learn, 'Where to Learn')}
        {renderResources(selectedOpportunity.resources?.how_to_find_resources, 'How to Find Resources')}
        {renderResources(selectedOpportunity.resources?.how_to_showcase_skill, 'How to Showcase Skills')}
        {renderResources(selectedOpportunity.resources?.how_to_practice, 'How to Practice')}
        {renderResources(selectedOpportunity.resources?.track_progress, 'Track Progress')}
      </div>
    </div>
  );
};

export default Roadmap;
