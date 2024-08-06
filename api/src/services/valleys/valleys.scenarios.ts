import type { Prisma, Valley } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ValleyCreateArgs>({
  valley: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Valley, 'valley'>
