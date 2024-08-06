import EditValleyCell from 'src/components/Valley/EditValleyCell'

type ValleyPageProps = {
  unique_sample_number: number
}

const EditValleyPage = ({ unique_sample_number }: ValleyPageProps) => {
  return <EditValleyCell unique_sample_number={unique_sample_number} />
}

export default EditValleyPage
