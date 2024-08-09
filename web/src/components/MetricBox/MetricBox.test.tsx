import { render } from '@redwoodjs/testing/web'

import MetricBox from './MetricBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MetricBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MetricBox />)
    }).not.toThrow()
  })
})
