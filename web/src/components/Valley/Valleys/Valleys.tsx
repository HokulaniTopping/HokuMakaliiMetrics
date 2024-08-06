import type {
  DeleteValleyMutation,
  DeleteValleyMutationVariables,
  FindValleys,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Valley/ValleysCell'
import { truncate } from 'src/lib/formatters'

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

const ValleysList = ({ valleys }: FindValleys) => {
  const [deleteValley] = useMutation(DELETE_VALLEY_MUTATION, {
    onCompleted: () => {
      toast.success('Valley deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Unique sample number</th>
            <th>Sample id</th>
            <th>Tec</th>
            <th>P h</th>
            <th>Ec</th>
            <th>Sulfur</th>
            <th>Phosphorus</th>
            <th>Olsen p</th>
            <th>Calcium</th>
            <th>Magnesium</th>
            <th>Potassium</th>
            <th>Sodium</th>
            <th>Boron</th>
            <th>Iron</th>
            <th>Manganese</th>
            <th>Copper</th>
            <th>Zinc</th>
            <th>Aluminum</th>
            <th>Total carbon</th>
            <th>Total nitrogen</th>
            <th>C n ratio</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {valleys.map((valley) => (
            <tr key={valley.unique_sample_number}>
              <td>{truncate(valley.unique_sample_number)}</td>
              <td>{truncate(valley.sample_id)}</td>
              <td>{truncate(valley.TEC)}</td>
              <td>{truncate(valley.pH)}</td>
              <td>{truncate(valley.EC)}</td>
              <td>{truncate(valley.Sulfur)}</td>
              <td>{truncate(valley.Phosphorus)}</td>
              <td>{truncate(valley.Olsen_P)}</td>
              <td>{truncate(valley.Calcium)}</td>
              <td>{truncate(valley.Magnesium)}</td>
              <td>{truncate(valley.Potassium)}</td>
              <td>{truncate(valley.Sodium)}</td>
              <td>{truncate(valley.Boron)}</td>
              <td>{truncate(valley.Iron)}</td>
              <td>{truncate(valley.Manganese)}</td>
              <td>{truncate(valley.Copper)}</td>
              <td>{truncate(valley.Zinc)}</td>
              <td>{truncate(valley.Aluminum)}</td>
              <td>{truncate(valley.Total_Carbon__)}</td>
              <td>{truncate(valley.Total_Nitrogen__)}</td>
              <td>{truncate(valley.C_N_Ratio)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.valley({
                      unique_sample_number: valley.unique_sample_number,
                    })}
                    title={
                      'Show valley ' + valley.unique_sample_number + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editValley({
                      unique_sample_number: valley.unique_sample_number,
                    })}
                    title={'Edit valley ' + valley.unique_sample_number}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete valley ' + valley.unique_sample_number}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(valley.unique_sample_number)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ValleysList
