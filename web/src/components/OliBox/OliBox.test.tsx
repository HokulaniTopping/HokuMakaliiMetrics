import { render } from '@redwoodjs/testing/web'

import OliBox from './OliBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OliBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OliBox />)
    }).not.toThrow()
  })
})
