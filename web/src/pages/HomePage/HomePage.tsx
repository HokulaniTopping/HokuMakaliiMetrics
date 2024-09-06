import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'src/components/Valley/ValleysCell';
import MetricBox from 'src/components/MetricBox/MetricBox';
import 'web/src/components/MetricBox/MetricBox.css';
import RecomemndationsBox from 'src/components/RecomendationsBox/RecomendationsBox';
import Gauge from 'src/components/Gauge/Gauge';
import OliBox from 'src/components/OliBox/OliBox';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.valleys || data.valleys.length === 0) return <p>No data available</p>;

  const valley = data.valleys[1];

  const ranges = {
    TEC: { min: 25, max: 30 },
    pH: { min: 6.0, max: 6.5 },
    Sulfur: { min: 40, max: 80 },
    EC: { min: 0, max: 1.5 },
    Phosphorus: { min: 30, max: 50 },
    Olsen_P: { min: 0, max: 10 },
    Calcium: { min: 3300, max: 3800 },
    Magnesium: { min: 650, max: 750 },
    Potassium: { min: 400, max: 550 },
    Sodium: { min: 0, max: 200 },
    Boron: { min: 1.0, max: 1.5 },
    Iron: { min: 100, max: 300 },
    Manganese: { min: 30, max: 100 },
    Copper: { min: 3, max: 10 },
    Zinc: { min: 10, max: 30 },
    Aluminum: { min: 0, max: 0 },
    Total_Nitrogen__: { min: 0.15, max: 1 },
    Total_Carbon__: { min: 2, max: 4 },
    C_N_Ratio: { min: 0, max: 0 },
  };

  const getBackgroundBoxColor = (value: number, rangeMin: number, rangeMax: number) => {
    return value >= rangeMin && value <= rangeMax ? '#607126' : '#A25151';
  };

  const metrics = Object.keys(ranges); // Metrics from the ranges object

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust this value to control scroll distance
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <body>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      <div className="Top_of_screen">
        <div className="align-horizontal">
          <h2 className="sample_id_name">{valley.sample_id}</h2>
          <h2 className="Ulu_3">ʻUlu 3</h2>
        </div>
        <h2 className="soil_type">Hanalei Soil</h2>
        <h2 className="Date">{year}-{month}-{day}</h2>

        <Gauge
          percentage={90}
          label="Soil health"
          date="Aug 1st, 2024"
          pH={valley.pH}
          ec={valley.EC}
          carbon={valley.Total_Carbon__}
        />

        <div className="wrapper-metric-boxes">

          <button onClick={() => handleScroll('left')} className="scroll-button">
            <ChevronLeft size={40} />
          </button>

          <div ref={scrollContainerRef} className="metric-boxes-container">
            {metrics.map((metric) => {
              const value = valley[metric.replace(' ', '_')];
              const { min: minRange, max: maxRange } = ranges[metric]; // Get hardcoded min and max

              return (
                <div key={metric} className="metric-box-wrapper" style={{ backgroundColor: getBackgroundBoxColor(value, minRange, maxRange), borderRadius: '10px' }}>
                  <MetricBox
                    name={metric}
                    value={value}
                    rangeMin={minRange}
                    rangeMax={maxRange}
                    backgroundColor={getBackgroundBoxColor(value, minRange, maxRange)}
                  />
                </div>
              );
            })}
          </div>

          <button onClick={() => handleScroll('right')} className="scroll-button">
            <ChevronRight size={40} style={{marginRight: '0px'}} />
          </button>
        </div>
      </div>

      <div className="wrapper-recomendations-box">
        <RecomemndationsBox />
      </div>

      <div className="wrapper-oli-box">
        <OliBox />
      </div>
    </body>
  );
};

export default HomePage;
