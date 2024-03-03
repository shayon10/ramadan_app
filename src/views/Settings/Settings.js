// src/views/Settings/Settings.js

import React, { useState } from 'react';

function Settings() {
  const [selectedMethod, setSelectedMethod] = useState(2); // Default prayer times calculation method

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="method-selection">
        <label htmlFor="method">Prayer Times Calculation Method:</label>
        <select id="method" value={selectedMethod} onChange={handleMethodChange}>
          <option value={1}>University of Islamic Sciences, Karachi</option>
          <option value={2}>Islamic Society of North America</option>
          {/* Add more options based on your needs */}
        </select>
      </div>
      {/* Add more settings as needed */}
    </div>
  );
}

export default Settings;
