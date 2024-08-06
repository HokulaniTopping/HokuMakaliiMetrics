import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const valleys: QueryResolvers['valleys'] = () => {
  return db.valley.findMany()
}

export const valley: QueryResolvers['valley'] = ({ unique_sample_number }) => {
  return db.valley.findUnique({
    where: { unique_sample_number },
  })
}

export const createValley: MutationResolvers['createValley'] = ({ input }) => {
  return db.valley.create({
    data: input,
  })
}

export const updateValley: MutationResolvers['updateValley'] = ({
  unique_sample_number,
  input,
}) => {
  return db.valley.update({
    data: input,
    where: { unique_sample_number },
  })
}

export const deleteValley: MutationResolvers['deleteValley'] = ({
  unique_sample_number,
}) => {
  return db.valley.delete({
    where: { unique_sample_number },
  })
}
