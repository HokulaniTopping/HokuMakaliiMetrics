import type { QueryResolvers, MutationResolvers } from 'types/graphql'
import { PrismaClient } from '@prisma/client';
import { db } from 'src/lib/db'
import type { QueryvalleyArgs } from 'api/src/graphql/valleys.sdl'




export const customQuery = async () => {
  const result = await db.$queryRaw `SELECT pH FROM Valley WHERE unique_sample_number = 1`
  return result
}




const prisma = new PrismaClient();

export const valleys: QueryResolvers['valleys'] = () => {
  return db.valley.findMany()
}

export const valley: QueryResolvers['valley'] = ({ unique_sample_number }) => {
  return db.valley.findUnique({
    where: { unique_sample_number },
  });
};


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
