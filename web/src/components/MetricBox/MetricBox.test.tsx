import { render } from '@redwoodjs/testing/web'

import MetricBox from './MetricBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MetricBox', () => {
  it('renders successfully', () => {
    const props = {
      name: 'Metric Name',
      value: 100, // Replace with a meaningful value for your test
    }

    expect(() => {
      render(<MetricBox {...props} />)
    }).not.toThrow()
  })
})
