import type { FindValleys, FindValleysVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Valleys from 'src/components/Valley/Valleys'

export const QUERY: TypedDocumentNode<FindValleys, FindValleysVariables> = gql`
  query FindValleys {
    valleys {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No valleys yet. '}
      <Link to={routes.newValley()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindValleys>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  valleys,
}: CellSuccessProps<FindValleys, FindValleysVariables>) => {
  return <Valleys valleys={valleys} />
}
