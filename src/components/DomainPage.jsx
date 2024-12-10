import React from 'react';
import { useParams } from 'react-router-dom';
import domainsData from '../data/Domains.json';

const DomainPage = () => {
  const { domainId } = useParams(); 
  
  const domain = domainsData?.find(d => d.domain_id === domainId); 

  if (!domain) {
    return <p>No domain found for the given ID.</p>;
  }

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
    <div className="domain-page">
      <h1>{domain.domain_name} - Opportunities</h1>
      <p>{domain.domain_description}</p>

      <div className="opportunity-list">
        {domain.opportunities?.map((opportunity) => (
          <div className="opportunity-card" key={opportunity.id}>
            <h3>{opportunity.opportunity}</h3>
            <p>{opportunity.description}</p>
            <div className="resources-section">
              {renderResources(opportunity.resources?.where_to_learn, 'Where to Learn')}
              {renderResources(opportunity.resources?.how_to_find_resources, 'How to Find Resources')}
              {renderResources(opportunity.resources?.how_to_showcase_skill, 'How to Showcase Skills')}
              {renderResources(opportunity.resources?.how_to_practice, 'How to Practice')}
              {renderResources(opportunity.resources?.track_progress, 'Track Progress')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainPage;
