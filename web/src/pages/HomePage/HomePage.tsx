// export default HomePage;
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'src/components/Valley/ValleysCell';
import MetricBox from 'src/components/MetricBox/MetricBox';
import 'web/src/components/MetricBox/MetricBox.css';
import RecomendationsBox from 'src/components/RecomendationsBox/RecomendationsBox';

// Define the component that will fetch data and display MetricBox
const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Handle case where no valleys are found
  if (!data || !data.valleys || data.valleys.length === 0) return <p>No data available</p>;

  // Assuming you want to display the first valley's metrics
  const valley = data.valleys[0];

  // Function to determine the background color based on the value and range
  const getBackgroundBoxColor = (value: number, rangeMin: number, rangeMax: number) => {
    return value >= rangeMin && value <= rangeMax ? '#607126' : '#A25151';
  };

  return (
    <body>
      {/* TOP OF THE SCREEN */}
      <div className="Top_of_screen">
          <div className="align-horizontal">
            <h2 className="sample_id_name">{valley.sample_id}</h2>
            <h2 className="Ulu_3">ʻUlu 3</h2>
          </div>
          {/* This is where you change the type of soil it is */}
          <h2 className="soil_type">Hanalei Soil</h2>
          <h2 className="Date">{year}-{month}-{day}</h2>


        <div className="wrapper-metric-boxes">
          {['TEC', 'pH', 'Sulfur', 'EC', 'Phosphorus', 'Olsen_P', 'Calcium', 'Magnesium', 'Potassium', 'Sodium', 'Boron', 'Iron', 'Manganese', 'Copper', 'Zinc', 'Aluminum', 'Total_Nitrogen__', 'Total_Carbon__', 'C_N_Ratio'].map((metric, index) => {
            const value = valley[metric.replace(' ', '_')];
            const minRange = valley[`${metric.replace(' ', '_')}_Min`] || 10;
            const maxRange = valley[`${metric.replace(' ', '_')}_Max`] || 100;
            return (
              <div key={metric} style={{ backgroundColor: getBackgroundBoxColor(value, minRange, maxRange) }}>
                <MetricBox
                  name={metric}
                  value={value}
                  rangeMin={minRange}
                  rangeMax={maxRange}
                />
              </div>
           );
          })}
        </div>
      </div>

      {/* RECOMMENDATIONS BOX */}
      <div className="Recomendations-Box">
          <RecomendationsBox />
      </div>
    </body>
    )};

export default HomePage;
