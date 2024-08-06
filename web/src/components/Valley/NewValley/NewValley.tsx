import type {
  CreateValleyMutation,
  CreateValleyInput,
  CreateValleyMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ValleyForm from 'src/components/Valley/ValleyForm'

const CREATE_VALLEY_MUTATION: TypedDocumentNode<
  CreateValleyMutation,
  CreateValleyMutationVariables
> = gql`
  mutation CreateValleyMutation($input: CreateValleyInput!) {
    createValley(input: $input) {
      unique_sample_number
    }
  }
`

const NewValley = () => {
  const [createValley, { loading, error }] = useMutation(
    CREATE_VALLEY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Valley created')
        navigate(routes.valleys())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateValleyInput) => {
    createValley({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Valley</h2>
      </header>
      <div className="rw-segment-main">
        <ValleyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewValley
