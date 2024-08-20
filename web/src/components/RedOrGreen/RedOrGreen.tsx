
import React from 'react'
import MetricBox from '../MetricBox/MetricBox'

interface MetricBoxProps {
  name: string
  value: number
  rangeMin: number
  rangeMax: number
}

// Function to check if the value is within the range
const isInRange = (min: number, max: number, value: number): boolean => {
  return value >= min && value <= max
}

// Wrapper component to apply conditional styling
const RedOrGreenMetricBox: React.FC<MetricBoxProps> = ({ name, value, rangeMin, rangeMax }) => {
  const backgroundColor = isInRange(rangeMin, rangeMax, value) ? 'green' : 'red'

  return (
    <div style={{ backgroundColor }}>
      <MetricBox name={name} value={value} rangeMin={rangeMin} rangeMax={rangeMax} />
    </div>
  )
}

export default RedOrGreenMetricBox


