import type { Valley } from '@prisma/client'

import {
  valleys,
  valley,
  createValley,
  updateValley,
  deleteValley,
} from './valleys'
import type { StandardScenario } from './valleys.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('valleys', () => {
  scenario('returns all valleys', async (scenario: StandardScenario) => {
    const result = await valleys()

    expect(result.length).toEqual(Object.keys(scenario.valley).length)
  })

  scenario('returns a single valley', async (scenario: StandardScenario) => {
    const result = await valley({
      unique_sample_number: scenario.valley.one.unique_sample_number,
    })

    expect(result).toEqual(scenario.valley.one)
  })

  scenario('deletes a valley', async (scenario: StandardScenario) => {
    const original = (await deleteValley({
      unique_sample_number: scenario.valley.one.unique_sample_number,
    })) as Valley
    const result = await valley({
      unique_sample_number: original.unique_sample_number,
    })

    expect(result).toEqual(null)
  })
})
