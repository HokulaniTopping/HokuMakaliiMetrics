import { render } from '@redwoodjs/testing/web'

import RecomendationsBox from './RecomendationsBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecomendationsBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecomendationsBox />)
    }).not.toThrow()
  })
})
