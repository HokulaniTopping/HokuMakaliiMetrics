
//THIS IS THE HALF CIRCLE GAUGE

//_____________________________________________________________________________________________________________________________________________________________________________________
// import React from 'react';

// interface GaugeProps {
//   percentage: number;
//   label: string;
//   date: string;
//   pH: number;
//   ec: number;
//   carbon: number;
// }

// const Gauge: React.FC<GaugeProps> = ({ percentage, pH, ec, carbon }) => {
//   const radius = 80;
//   const centerX = 95; // Center X of the gauge
//   const centerY = 100; // Center Y of the gauge
//   const startAngle = Math.PI; // Start from the bottom (180 degrees)
//   const endAngle = 0; // End at the top (0 degrees)
//   const angle = startAngle - (percentage / 100) * (startAngle - endAngle);
//   const strokeWidth = 10;

//   const tickX = centerX + radius * Math.cos(angle);
//   const tickY = centerY - radius * Math.sin(angle);

//   // Function to create an SVG arc path
//   const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
//     const start = polarToCartesian(x, y, radius, endAngle);
//     const end = polarToCartesian(x, y, radius, startAngle);
//     const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
//     return [
//       "M", start.x, start.y,
//       "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
//     ].join(" ");
//   };

//   // Helper function to convert polar coordinates to Cartesian
//   const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInRadians: number) => {
//     return {
//       x: centerX + (radius * Math.cos(angleInRadians)),
//       y: centerY - (radius * Math.sin(angleInRadians))
//     };
//   };

//   return (
//     <div className="gauge-container">
//       <div className="gauge">
//         <svg width="100%" height="220" viewBox="0 0 200 100">
//           {/* Background arc */}
//           <path
//             d={describeArc(centerX, centerY, radius, startAngle, endAngle)}
//             fill="white"
//             stroke="#B1C081"
//             strokeWidth={strokeWidth}
//           />

//           {/* Filled arc */}
//           <path
//             d={describeArc(centerX, centerY, radius, startAngle, angle)}
//             fill="grey"
//             stroke="#4CAF50"
//             strokeWidth={strokeWidth}
//           />

//           {/* Tick mark (line) */}
//           <line
//             x1={centerX}
//             y1={centerY}
//             x2={tickX}
//             y2={tickY}
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />

//           <text x={centerX} y="80" textAnchor="middle" fontSize="36" fill="black" fontFamily='Nunito Sans' fontWeight={600}>
//             {percentage}%
//           </text>
//           <text x={centerX} y="97" textAnchor="middle" fontSize="10" fill="black" fontFamily='Nunito Sans'>
//             Soil Health
//           </text>
//           {/* Label */}
//           <text x={centerX} y="45" textAnchor="middle" fontSize="14" fill="#B1C081" fontFamily='Nunito Sans'>
//             EXCELLENT
//           </text>
//         </svg>
//       </div>

//       {/* Additional metrics */}
//       <div className="metrics" style={{
//         padding: '10px',
//         paddingRight: '20px',
//         paddingLeft: '20px',
//         borderRadius: '5px',
//         marginLeft: '20px',
//         display: "flex",
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginTop: '40px',
//         marginBottom: '40px'
//       }}>
//         <Metric value={pH} label="pH" />
//         <Metric value={ec} label="EC" />
//         <Metric value={carbon} label="Carbon" unit="%" />
//       </div>
//     </div>
//   );
// };


// const Metric: React.FC<{ value: number; label: string; unit?: string }> = ({ value, label, unit }) => {
//   const [integerPart, fractionalPart] = value.toFixed(2).split('.');

//   return (
//     <div className="metric" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px"}}>

//       <div className="value" style={{display: "flex", alignItems: "flex-start", gap: "10px"}}>

//         <span className="integer-part" style={{fontSize: '4em', fontWeight: '700', lineHeight: 1}}>{integerPart}</span>

//         <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>

//           <span className="fractional-part" style={{fontSize: '1em', fontWeight: '700'}}>.{fractionalPart}</span>
//           {unit && <span className="unit" style={{fontSize: '1em'}}>{unit}</span>}

//         </div>

//       </div>

//       <div className="label" style={{color: '#B1C081', margin: '8px'}}>{label}</div>

//     </div>
//   );
// };

// export default Gauge;


//_____________________________________________________________________________________________________________________________________________________________________________________


































// //THIS IS THE PIE CHART GAUGE
// _____________________________________________________________________________________________________________________________________________________________________________________


// web/src/components/PieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, ChartOptions, ChartData } from 'chart.js';

// Register required components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface PieChartProps {
  percentage: number;
  label: string;
  pH: number;
  ec: number;
  carbon: number;
  date: string;
}

const Gauge: React.FC<PieChartProps> = ({ percentage, label, pH, ec, carbon, date }) => {
  // Data for the pie chart
  const data: ChartData<'pie'> = {
    labels: [label],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#4CAF50', '#E0E0E0'],
        borderWidth: 0,
      },
    ],
  };


  // Options for the pie chart
  const options: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
      legend: {
        display: false, // Disable the legend
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Remove the border from the pie slices
      },
    },
  };




  return (
    <div className="piechart-container" style={{ textAlign: 'center', position: 'relative' }}>
      {/* Outer pie chart */}
      <div className="Pie" style={{ alignContent: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Pie data={data} options={options} style={{ height: '300px', width: '600px' }} />





        {/* Beige overlay circle */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '230px', // Smaller height for the inner circle
            width: '230px',  // Smaller width for the inner circle
            backgroundColor: '#F4E6C1', // Beige color
            borderRadius: '50%', // Makes it a circle
            zIndex: 1, // Stays on top of the pie chart
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >



           {/* Writing on beige circle... need to change excelent to say poor or okay (perhaps dictionary) */}
          <div style={{ color: 'black' }}>
            <div style={{ fontSize: '20px', color: '#A7C095', marginBottom: '5px', marginTop: '-20px'}}>EXCELLENT</div>
            <div style={{ fontSize: '4em', fontWeight: 700}}>{percentage}%</div>
            <div style={{ fontSize: '20px' }}>{label}</div>
          </div>
        </div>
      </div>



      {/* Metrics section */}
      <div
        className="metrics"
        style={{
          padding: '20px',
          paddingRight: '20px',
          paddingLeft: '20px',
          borderRadius: '5px',
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: '40px',
        }}
      >
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
    <div
      className="metric"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}
    >
      <div className="value" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <span className="integer-part" style={{ fontSize: '4em', fontWeight: '700', lineHeight: 1 }}>
          {integerPart}
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <span className="fractional-part" style={{ fontSize: '1em', fontWeight: '700' }}>
            .{fractionalPart}
          </span>
          {unit && <span className="unit" style={{ fontSize: '1em' }}>{unit}</span>}
        </div>
      </div>
      <div className="label" style={{ color: '#B1C081', margin: '8px' }}>{label}</div>
    </div>
  );
};

export default Gauge;











