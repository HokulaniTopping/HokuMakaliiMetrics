
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, ChartOptions, ChartData } from 'chart.js';
import Valley from '../Valley/Valley/Valley';


// Register required components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface PieChartProps {
  percentage: number;
  label: string;
  pH__1_1_: number;
  EC__2_1_: number;
  carbon: number;
  date: string;
}

const Gauge: React.FC<PieChartProps> = ({ percentage, label, pH__1_1_, EC__2_1_, carbon, date }) => {
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
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };




  return (
    <div className="piechart-container" style={{ textAlign: 'center', position: 'relative'}}>
      {/* Outer pie chart */}
      <div className="Pie" style={{ alignContent: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Pie data={data} options={options} style={{ height: '300px', width: '600px'}} />


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
          paddingRight: '60px',
          paddingLeft: '60px',
          borderRadius: '5px',
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: '40px',
        }}
      >


      {/* Put this back after hoike */}
        <Metric value={pH__1_1_} label="pH" />
        <Metric value={EC__2_1_} label="EC" />
        <Metric value={carbon} label="Carbon" unit="%" />
      </div>
    </div>
  );
};



const Metric: React.FC<{ value: number; label: string; unit?: string }> = ({ value, label, unit }) => {
  const safeValue = value !== null && value !== undefined ? value : 0;
  const [integerPart, fractionalPart] = safeValue.toFixed(2).split('.');


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
