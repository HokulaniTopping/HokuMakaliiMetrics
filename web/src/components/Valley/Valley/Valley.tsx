import type {
  DeleteValleyMutation,
  DeleteValleyMutationVariables,
  FindValleyByUniqueSampleNumber,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_VALLEY_MUTATION: TypedDocumentNode<
  DeleteValleyMutation,
  DeleteValleyMutationVariables
> = gql`
  mutation DeleteValleyMutation($unique_sample_number: Int!) {
    deleteValley(unique_sample_number: $unique_sample_number) {
      unique_sample_number
    }
  }
`

interface Props {
  valley: NonNullable<FindValleyByUniqueSampleNumber['valley']>
}

const Valley = ({ valley }: Props) => {
  const [deleteValley] = useMutation(DELETE_VALLEY_MUTATION, {
    onCompleted: () => {
      toast.success('Valley deleted')
      navigate(routes.valleys())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (
    unique_sample_number: DeleteValleyMutationVariables['unique_sample_number']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete valley ' + unique_sample_number + '?'
      )
    ) {
      deleteValley({ variables: { unique_sample_number } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Valley {valley.unique_sample_number} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Unique sample number</th>
              <td>{valley.unique_sample_number}</td>
            </tr>
            <tr>
              <th>Sample id</th>
              <td>{valley.sample_id}</td>
            </tr>
            <tr>
              <th>Tec</th>
              <td>{valley.TEC}</td>
            </tr>
            <tr>
              <th>P h</th>
              <td>{valley.pH}</td>
            </tr>
            <tr>
              <th>Ec</th>
              <td>{valley.EC}</td>
            </tr>
            <tr>
              <th>Sulfur</th>
              <td>{valley.Sulfur}</td>
            </tr>
            <tr>
              <th>Phosphorus</th>
              <td>{valley.Phosphorus}</td>
            </tr>
            <tr>
              <th>Olsen p</th>
              <td>{valley.Olsen_P}</td>
            </tr>
            <tr>
              <th>Calcium</th>
              <td>{valley.Calcium}</td>
            </tr>
            <tr>
              <th>Magnesium</th>
              <td>{valley.Magnesium}</td>
            </tr>
            <tr>
              <th>Potassium</th>
              <td>{valley.Potassium}</td>
            </tr>
            <tr>
              <th>Sodium</th>
              <td>{valley.Sodium}</td>
            </tr>
            <tr>
              <th>Boron</th>
              <td>{valley.Boron}</td>
            </tr>
            <tr>
              <th>Iron</th>
              <td>{valley.Iron}</td>
            </tr>
            <tr>
              <th>Manganese</th>
              <td>{valley.Manganese}</td>
            </tr>
            <tr>
              <th>Copper</th>
              <td>{valley.Copper}</td>
            </tr>
            <tr>
              <th>Zinc</th>
              <td>{valley.Zinc}</td>
            </tr>
            <tr>
              <th>Aluminum</th>
              <td>{valley.Aluminum}</td>
            </tr>
            <tr>
              <th>Total carbon</th>
              <td>{valley.Total_Carbon__}</td>
            </tr>
            <tr>
              <th>Total nitrogen</th>
              <td>{valley.Total_Nitrogen__}</td>
            </tr>
            <tr>
              <th>C n ratio</th>
              <td>{valley.C_N_Ratio}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editValley({
            unique_sample_number: valley.unique_sample_number,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(valley.unique_sample_number)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Valley
