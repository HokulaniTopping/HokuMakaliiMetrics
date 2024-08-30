import React from 'react';

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
  const centerX = 50; // Center X of the gauge
  const centerY = 50; // Center Y of the gauge
  const angle = (percentage / 100) * 180; //171
  const tickAngle = (angle * Math.PI) / 180;
  const tickX = centerX + (radius * Math.cos(tickAngle));
  const tickY = centerY - (radius * Math.sin(tickAngle));
  const strokeWidth = 10;


  return (

    <div className="gauge-container">
      <div className="gauge">
        <svg width="100%" height="220" viewBox="0 0 190 100" >
          {/* Background arc */}
            <path
              d={`M 10 100 A ${radius} ${radius} 0 0 1 180 100`} //this is where you can change the size of gauge --the part that says 180
              fill="white"
              stroke="#B1C081"
              strokeWidth={strokeWidth}
            />
          {/*Tick mark*/}
            <line
              x1={tickX}
              y1={tickY}
              x2={95 + (radius + 5) * Math.sin(tickAngle)}
              y2={15 - (radius + 5) * Math.cos(tickAngle)}
              stroke="yellow"
              strokeWidth="2"
              stroke-linecap = "round"
            />

          <text x="100" y="80" textAnchor="middle" fontSize="36" fill="black" fontFamily='Nunito Sans' fontWeight={600}>
            {percentage}%
          </text>
          <text x="90" y="97" textAnchor="middle" fontSize="10" fill="black" fontFamily='Nunito Sans'>
            Soil Health
          </text>
          {/* Label */}
          <text x="95" y="45" textAnchor="middle" fontSize="14" fill="#B1C081" font-family= 'Nunito Sans'>
            EXCELLENT
          </text>
      </svg>
    </div>


      {/* Additional metrics */}
      <div className="metrics" style={{padding: '10px',
        paddingRight: '20px',
        paddingLeft: '20px',
        borderRadius: '5px',
        marginLeft: '20px',
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '40px',
        marginBottom: '40px'}}>
        <Metric value={pH} label="pH" />
        <Metric value={ec} label="EC" />
        <Metric value={carbon} label="Carbon" unit="%" />
      </div>
    </div>
  );
};



const Metric: React.FC<{ value: number; label: string; unit?: string }> = ({ value, label, unit }) => {
  const [integerPart, fractionalPart] = value.toFixed(2).split('.');

  return (
    <div className="metric" style={{alignItems: "center", gap: "10px"}}>
      <div className="value"style={{display: "flex", gap: "10px"}}>
        <span className="integer-part" style={{fontSize: '4em', fontWeight: '700'}}>{integerPart}</span>
        <span className="fractional-part" style={{display: "flex", verticalAlign: "top", fontSize: '1em', fontWeight: '700'}}>.{fractionalPart}</span>
        {unit}
      </div>
      <div className="label" style={{color: '#B1C081'}}>{label}</div>
    </div>


  );
};

export default Gauge;
