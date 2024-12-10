import React from 'react';

const LogOut = ({ onLogout }) => {
  return (
    <button className="logout-button" onClick={onLogout}>
      Log Out
    </button>
  );
};

export default LogOut;
