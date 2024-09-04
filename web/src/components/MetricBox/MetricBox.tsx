
import React from 'react';

const MetricBox = ({ name, value, rangeMin, rangeMax, backgroundColor }) => {
  const [whole, fractional] = value.toFixed(2).split('.');

  return (
    <div className="metric-box">
      <div className="metric-value-container">
        <div className='Metric-value'>
          <span className="first-number" style={{ fontSize: '4em', fontWeight: 700 }}>{whole}</span>
          <span className="second-number" style={{ fontSize: '1em', fontWeight: 700 }}>.{fractional}</span>
        </div>
        <p className="metric-unit">{name}</p>
      </div>

      <div className='metric-range-wrapper'>
        <div className="metric-range">
          <div className="range-labels">
            <span>{rangeMin}</span>
            <span>{rangeMax}</span>
          </div>
          <div className="bar-container" style={{ backgroundColor, borderRadius: '10px', overflow: 'visible' }}>
            <div className="range-bar" style={{ position: 'relative' }}>
              <div
                className="range-fill"
                style={{
                  left: `${((value - rangeMin) / (rangeMax - rangeMin)) * 100}%`,
                  top: '-8px',
                  bottom: '-5px',
                  backgroundColor: 'black',
                  zIndex: '1',
                  position: 'absolute',
                  width: "3px",
                  height: '20px'
                }}
              ></div>
            </div>
          </div>
          <p className="metric-text">Optimum Range</p>
        </div>
      </div>
    </div>
  );
};

export default MetricBox;
