// src/components/MetricBox.js
import React from 'react';


const MetricBox = ({ name, value }) => {
  return (
    <div className="metric-box">
      <h3 className="metric-name">{name}</h3>
      <p className="metric-value">{value !== null ? value : 'N/A'}</p>
    </div>
  );
};

export default MetricBox;
