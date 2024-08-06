import ValleyCell from 'src/components/Valley/ValleyCell'

type ValleyPageProps = {
  unique_sample_number: number
}

const ValleyPage = ({ unique_sample_number }: ValleyPageProps) => {
  return <ValleyCell unique_sample_number={unique_sample_number} />
}

export default ValleyPage
