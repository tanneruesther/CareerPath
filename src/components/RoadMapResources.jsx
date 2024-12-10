
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import domainsData from '../data/Domains.json';
import '../styles/roadMaps.css'

const Roadmaps = () => {
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState('');

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
    setSelectedOpportunity(''); 
  };

  const handleOpportunityChange = (event) => {
    setSelectedOpportunity(event.target.value);
  };

  const selectedDomainData = domainsData.find(d => d.domain_name === selectedDomain);

  return (
    <div className='Roadmaps'>
      <h1>Select a domain to explore the opportunities!</h1>
      <label htmlFor="domain">Select a Domain:</label>
      <select id="domain" onChange={handleDomainChange} value={selectedDomain}>
        <option value="">-- Select a Domain --</option>
        {domainsData.map((domain) => (
          <option key={domain.domain_id} value={domain.domain_name}>
            {domain.domain_name}
          </option>
        ))}
      </select>

      {selectedDomainData ? (
        <>
          <h2>Select an Opportunity</h2>
          <select onChange={handleOpportunityChange} value={selectedOpportunity}>
            <option value="">-- Select an Opportunity --</option>
            {selectedDomainData.opportunities.length === 0 ? (
              <option>No opportunities available for this domain</option>
            ) : (
              selectedDomainData.opportunities.map((opportunity) => (
                <option key={opportunity.id} value={opportunity.id}>
                  {opportunity.opportunity}
                </option>
              ))
            )}
          </select>
        </>
      ) : null}

      {selectedOpportunity && selectedDomainData && (
        <div>
          <h2>Go to Roadmap</h2>
          <Link to={`/roadmap/${selectedDomain}/${selectedOpportunity}`}>
            View Roadmap for {selectedDomain} - {selectedOpportunity}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Roadmaps;
