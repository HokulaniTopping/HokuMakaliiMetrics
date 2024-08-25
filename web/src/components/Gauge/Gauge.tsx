import React from 'react';
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet">
</link>
interface GaugeProps {
  percentage: number;
  label: string;
  date: string;
  pH: number;
  ec: number;
  carbon: number;
}

const Gauge: React.FC<GaugeProps> = ({ percentage, label, date, pH, ec, carbon }) => {
  const radius = 80;
  const strokeWidth = 10;
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  const angleRange = 180;
  const angle = (normalizedPercentage / 100) * angleRange;




  return (
    <div className="gauge-container">
      <svg width="500" height="220" viewBox="0 0 200 120">
        {/* Background arc */}
          <path
            d={`M 10 100 A ${radius} ${radius} 0 0 1 180 100`}
            fill="white"
            stroke="#8ACA2B"
            strokeWidth={strokeWidth}
          />

        {/* Percentage text */}
        <text
          x="100"
          y="80"
          textAnchor="middle"
          fontSize="36"
          fill="black"
          fontFamily="Nunito Sans"
          ></text>

        <text x="100" y="80" textAnchor="middle" fontSize="36" fill="black" fontFamily='Nunito Sans'>
          {percentage}%
        </text>
        <text x="90" y="97" textAnchor="middle" fontSize="10" fill="black" fontFamily='Nunito Sans'>
          Soil Health
        </text>
        {/* Label */}
        <text x="95" y="50" textAnchor="middle" fontSize="14" fill="#8ACA2B" font-family= 'Nunito Sans'>
          EXCELLENT
        </text>
      </svg>


      {/* Additional metrics */}
      <div className="metrics">
        <Metric value={pH} label="pH" />
        <Metric value={ec} label="EC" />
        <Metric value={carbon} label="Carbon" unit="%" />
      </div>
    </div>
  );
};

const Metric: React.FC<{ value: number; label: string; unit?: string }> = ({ value, label, unit }) => (
  <div className="metric">
    <div className="value">{value}{unit}</div>
    <div className="label">{label}</div>
  </div>
);

export default Gauge;
