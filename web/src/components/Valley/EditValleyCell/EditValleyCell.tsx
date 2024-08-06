import type {
  EditValleyByUniqueSampleNumber,
  UpdateValleyInput,
  UpdateValleyMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ValleyForm from 'src/components/Valley/ValleyForm'

export const QUERY: TypedDocumentNode<EditValleyByUniqueSampleNumber> = gql`
  query EditValleyByUniqueSampleNumber($unique_sample_number: Int!) {
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

const UPDATE_VALLEY_MUTATION: TypedDocumentNode<
  EditValleyById,
  UpdateValleyMutationVariables
> = gql`
  mutation UpdateValleyMutation(
    $unique_sample_number: Int!
    $input: UpdateValleyInput!
  ) {
    updateValley(unique_sample_number: $unique_sample_number, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  valley,
}: CellSuccessProps<EditValleyByUniqueSampleNumber>) => {
  const [updateValley, { loading, error }] = useMutation(
    UPDATE_VALLEY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Valley updated')
        navigate(routes.valleys())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateValleyInput,
    id: EditValleyByUniqueSampleNumber['valley']['id']
  ) => {
    updateValley({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Valley {valley?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ValleyForm
          valley={valley}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
