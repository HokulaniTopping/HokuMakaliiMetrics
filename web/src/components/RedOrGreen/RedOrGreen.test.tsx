import { render } from '@redwoodjs/testing/web'

import RedOrGreen from './RedOrGreen'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RedOrGreen', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedOrGreen />)
    }).not.toThrow()
  })
})
