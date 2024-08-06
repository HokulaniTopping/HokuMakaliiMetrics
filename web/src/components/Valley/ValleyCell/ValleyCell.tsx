import type {
  FindValleyByUniqueSampleNumber,
  FindValleyByUniqueSampleNumberVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Valley from 'src/components/Valley/Valley'

export const QUERY: TypedDocumentNode<
  FindValleyByUniqueSampleNumber,
  FindValleyByUniqueSampleNumberVariables
> = gql`
  query FindValleyByUniqueSampleNumber($unique_sample_number: Int!) {
    valley: valley(unique_sample_number: $unique_sample_number) {
      unique_sample_number
      sample_id
      TEC
      pH
      EC
      Sulfur
      Phosphorus
      Olsen_P
      Calcium
      Magnesium
      Potassium
      Sodium
      Boron
      Iron
      Manganese
      Copper
      Zinc
      Aluminum
      Total_Carbon__
      Total_Nitrogen__
      C_N_Ratio
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Valley not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindValleyByUniqueSampleNumberVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  valley,
}: CellSuccessProps<
  FindValleyByUniqueSampleNumber,
  FindValleyByUniqueSampleNumberVariables
>) => {
  return <Valley valley={valley} />
}
