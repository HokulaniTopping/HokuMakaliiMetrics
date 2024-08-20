// // export default HomePage;
// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY } from 'src/components/Valley/ValleysCell';
// import MetricBox from 'src/components/MetricBox/MetricBox';
// import 'web/src/components/MetricBox/MetricBox.css';
// import RedOrGreenMetricBox from 'web/src/components/RedOrGreen/RedOrGreen'

// // Define the component that will fetch data and display MetricBox
// const HomePage: React.FC = () => {
//   const { loading, error, data } = useQuery(QUERY);


//   interface WrapperProps {
//     children: React.ReactNode;
//   }


//   const currentDate = new Date();

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth() + 1;
//   const day = currentDate.getDate();


//   const Wrapper: React.FC<WrapperProps> = ({ children }) => {
//     return <div className="wrapper">{children}</div>;
//   };


//   // const getBackgroundColor = (value: number, rangeMin: number, rangeMax: number) => {
//   //   return value >= rangeMin && value <= rangeMax ? 'green' : 'red';
//   // };


//   // Handle loading state
//   if (loading) return <p>Loading...</p>;

//   // Handle error state
//   if (error) return <p>Error: {error.message}</p>;

//   // Handle case where no valleys are found
//   if (!data || !data.valleys || data.valleys.length === 0) return <p>No data available</p>;

//   // Assuming you want to display the first valley's metrics
//   const valley = data.valleys[0];


//   return (
//     <body>

// {/*TOP OF THE SCREEN*/}
//     <div className='Top_of_screen'>
//       <div>
//         <div className="align-horizontal">
//           <h2 className="sample_id_name">{valley.sample_id}</h2>
//           <h2 className="Ulu_3">ʻUlu 3</h2>
//         </div>
//         {/*This is where you change the type of soil it is*/}
//         <h2 className='soil_type'>Hanalei Soil</h2>
//         <h2 className='Date'>{year}-{month}-{day}</h2>
//     </div>

//       <div className="wrapper">
//         <MetricBox name="TEC" value={valley.TEC} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="pH" value={valley.pH} rangeMin={6} rangeMax={6.5}/>
//         <MetricBox name="Sulfur" value={valley.Sulfur} rangeMin={40} rangeMax={80}/>
//         <MetricBox name="EC" value={valley.EC} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Phosphorus" value={valley.Phosphorus} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Olsen P" value={valley.Olsen_P} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Calcium" value={valley.Calcium} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Magnesium" value={valley.Magnesium} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Potassium" value={valley.Potassium} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Sodium" value={valley.Sodium} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Boron" value={valley.Boron} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Iron" value={valley.Iron} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Manganese" value={valley.Manganese} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Copper" value={valley.Copper} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Zinc" value={valley.Zinc} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Aluminum" value={valley.Aluminum} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Total Carbon" value={valley.Total_Carbon__} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="Total Nitrogen" value={valley.Total_Nitrogen__} rangeMin={16} rangeMax={18}/>
//         <MetricBox name="C N Ratio" value={valley.C_N_Ratio} rangeMin={16} rangeMax={18}/>
//       </div>
//     </div>
//     </body>
//   );
// };



















// export default HomePage;
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'src/components/Valley/ValleysCell';
import MetricBox from 'src/components/MetricBox/MetricBox';
import 'web/src/components/MetricBox/MetricBox.css';

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
    return value >= rangeMin && value <= rangeMax ? 'green' : 'red';
  };


  return (
    <body>
      {/* TOP OF THE SCREEN */}
      <div className="Top_of_screen">
        <div>
          <div className="align-horizontal">
            <h2 className="sample_id_name">{valley.sample_id}</h2>
            <h2 className="Ulu_3">ʻUlu 3</h2>
          </div>
          {/* This is where you change the type of soil it is */}
          <h2 className="soil_type">Hanalei Soil</h2>
          <h2 className="Date">{year}-{month}-{day}</h2>
        </div>

        <div className="wrapper">
          {['TEC', 'pH', 'Sulfur', 'EC', 'Phosphorus', 'Olsen_P', 'Calcium', 'Magnesium', 'Potassium', 'Sodium', 'Boron', 'Iron', 'Manganese', 'Copper', 'Zinc', 'Aluminum', 'Total_Nitrogen__', 'Total_Carbon__', 'C_N_Ratio'].map((metric, index) => {
            const value = valley[metric.replace(' ', '_')];
            const minRange = valley[`${metric.replace(' ', '_')}_Min`];
            const maxRange = valley[`${metric.replace(' ', '_')}_Max`];

            return (
              <div key={metric} style={{ backgroundColor: getBackgroundBoxColor(value, minRange, maxRange) }}>
                <MetricBox
                  name={metric}
                  value={value}
                  rangeMin={.01}
                  rangeMax={10}
                />
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
};


export default HomePage;
