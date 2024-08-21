
import React from 'react';

const getBackgroundBoxColor = (value: number, rangeMin: number, rangeMax: number) => {
  return value >= rangeMin && value <= rangeMax ? '#607126' : '#A25151';
};



const MetricBox = ({ name, value, rangeMin, rangeMax}) => {
  const [whole, fractional] = value.toFixed(2).split('.');
  return (
    <div className="metric-box">
      <div className="metric-value-container">
        <div className='Metric-value'>
          <span className="first-number" style={{ fontSize: '4em' }}>{whole}</span>
          <span className="second-number" style={{ fontSize: '1em' }}>.{fractional}</span>
        </div>
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
