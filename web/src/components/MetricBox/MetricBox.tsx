// src/components/MetricBox.js
import React from 'react';


const MetricBox = ({ name, value }) => {
  return (
    <div className="metric-box">
      <h3 className="metric-value">{value !== null ? value : 'N/A'}</h3>
      <p className="metric-name">{name}</p>
    </div>
  );
};

export default MetricBox;
