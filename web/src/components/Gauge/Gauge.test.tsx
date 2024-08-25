import { render } from '@redwoodjs/testing/web'

import Gauge from './Gauge'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Gauge', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Gauge />)
    }).not.toThrow()
  })
})
