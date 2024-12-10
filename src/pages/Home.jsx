import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import domainsData from '../data/Domains.json';
import '../styles/home.css'

const Home = () => {
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState('');

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
    setSelectedOpportunity(''); 
  };

  const handleOpportunityChange = (event) => {
    setSelectedOpportunity(event.target.value);
  };

  const selectedDomainData = domainsData?.find(domain => domain.domain_name === selectedDomain);

  return (
    <div className="home">
      <h1>Welcome to Career RoadMap</h1>
      <p>Select a domain to explore the opportunities!</p>
      <select onChange={handleDomainChange} value={selectedDomain}>
        <option value="">Select a Domain</option>
        {domainsData?.map((domain) => (
          <option key={domain.domain_id} value={domain.domain_name}>
            {domain.domain_name}
          </option>
        ))}
      </select>

      {selectedDomainData && (
        <>
          <h2>Select an Opportunity</h2>
          <select onChange={handleOpportunityChange} value={selectedOpportunity}>
            <option value="">Select an Opportunity</option>
            {selectedDomainData.opportunities?.map((opportunity) => (
              <option key={opportunity.id} value={opportunity.id}>
                {opportunity.opportunity}
              </option>
            ))}
          </select>
        </>
      )}
      
      {selectedOpportunity && (
        <div>
          <h2>Go to Roadmap</h2>
          <Link to={`/roadmap/${selectedDomain}/${selectedOpportunity}`}>
            View Roadmap for {selectedDomainData?.domain_name} - {selectedDomainData?.opportunities.find(o => o.id.toString() === selectedOpportunity)?.opportunity}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
