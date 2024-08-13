// export default HomePage;
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'src/components/Valley/ValleysCell';
import MetricBox from 'src/components/MetricBox/MetricBox';
import 'web/src/components/MetricBox/MetricBox.css';

// Define the component that will fetch data and display MetricBox
const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY);


  interface WrapperProps {
    children: React.ReactNode;
  }


  const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <div className="wrapper">{children}</div>;
  };


  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Handle case where no valleys are found
  if (!data || !data.valleys || data.valleys.length === 0) return <p>No data available</p>;


  // Assuming you want to display the first valley's metrics
  const valley = data.valleys[0];


  return (

    <div>
      <h1>HomePage</h1>
      <div className="wrapper">
        <MetricBox name="unique_sample_number" value={valley.unique_sample_number} />
        <MetricBox name="sample_id" value={valley.sample_id} />
        <MetricBox name="TEC" value={valley.TEC} />
        <MetricBox name="pH" value={valley.pH} />
        <MetricBox name="Sulfur" value={valley.Sulfur} />
        <MetricBox name="EC" value={valley.EC} />
        <MetricBox name="Phosphorus" value={valley.Phosphorus} />
        <MetricBox name="Olsen_P" value={valley.Olsen_P} />
        <MetricBox name="Calcium" value={valley.Calcium} />
        <MetricBox name="Magnesium" value={valley.Magnesium} />
        <MetricBox name="Potassium" value={valley.Potassium} />
        <MetricBox name="Sodium" value={valley.Sodium} />
        <MetricBox name="Boron" value={valley.Boron} />
        <MetricBox name="Iron" value={valley.Iron} />
        <MetricBox name="Manganese" value={valley.Manganese} />
        <MetricBox name="Copper" value={valley.Copper} />
        <MetricBox name="Zinc" value={valley.Zinc} />
        <MetricBox name="Aluminum" value={valley.Aluminum} />
        <MetricBox name="Total_Carbon__" value={valley.Total_Carbon__} />
        <MetricBox name="Total_Nitrogen__" value={valley.Total_Nitrogen__} />
        <MetricBox name="C_N_Ratio" value={valley.C_N_Ratio} />
      </div>
    </div>
  );
};

export default HomePage;
