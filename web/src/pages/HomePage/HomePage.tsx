
import FindValleysVariables from "src/components/Valley/ValleysCell"
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'src/components/Valley/ValleysCell';
import { PrismaClient } from '@prisma/client';

const HomePage: React.FC = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pHValues = data?.valleys?.map((valley: { pH?: number }) => valley.pH).filter((pH) => pH !== undefined);

  const pHValuesJSX = pHValues?.map((pH: number, index: number) => (
    <span key={index}> {pH} </span>
  ));

  return (
    <div>
      <h1>HomePage</h1>
      <p>
        pH Values: {pHValuesJSX}
      </p>
    </div>
  );
};

export default HomePage;
