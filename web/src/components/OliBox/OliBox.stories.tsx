// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import OliBox from './OliBox'

const meta: Meta<typeof OliBox> = {
  component: OliBox,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof OliBox>

export const Primary: Story = {}
