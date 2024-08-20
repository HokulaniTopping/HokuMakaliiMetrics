
import React from 'react';

const MetricBox = ({ name, value, rangeMin, rangeMax }) => {
  return (
    <div className="metric-box">
      <div className="metric-value-container">
        <h3 className="metric-value">{value !== null ? value : 'N/A'}</h3>
        <p className="metric-unit">{name}</p>
      </div>
      <div className="metric-range">
        <div className="range-labels">
          <span>{rangeMin}</span>
          <span>{rangeMax}</span>
        </div>
        <div className="range-bar">
          <div className="range-fill" style={{ left: `${((value - rangeMin) / (rangeMax - rangeMin)) * 100}%` }}></div>
        </div>
        <p className="optimum-text">Optimum Range</p>
      </div>
    </div>
  );
};

export default MetricBox;
