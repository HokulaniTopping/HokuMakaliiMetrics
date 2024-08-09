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

import MetricBox from './MetricBox'

const meta: Meta<typeof MetricBox> = {
  component: MetricBox,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MetricBox>

export const Primary: Story = {}
