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
  const strokeWidth = 10;
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  const angleRange = 180;
  const angle = (normalizedPercentage / 100) * angleRange;




  return (

    <div className="gauge-container">
      <div className="gauge">
        <svg width="100%" height="220" viewBox="0 0 190 100" >
          {/* Background arc */}
            <path
              d={`M 10 100 A ${radius} ${radius} 0 0 1 180 100`}
              fill="white"
              stroke="#B1C081"
              strokeWidth={strokeWidth}
            />
            <div className='tick-mark-for-gauge'>
              <path d="M50 50 L90 50 A 45 45 0 0 1 80 20 Z" fill="rgba(244, 242, 242, 0.1)" />
              <line x1="80" y1="15" x2="80" y2="25" stroke="white" strokeWidth="2" />
            </div>


          {/* Percentage text */}
          <text
            x="100"
            y="80"
            textAnchor="middle"
            fontSize="36"
            fill="black"
            fontFamily="Nunito Sans"
            ></text>

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
       {/* IF U WANNA DO IT THIS WAY OR THE WAY WITH ALL DIVS */}
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
