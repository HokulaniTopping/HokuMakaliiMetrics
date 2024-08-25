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

import Gauge from './Gauge'

const meta: Meta<typeof Gauge> = {
  component: Gauge,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Gauge>

export const Primary: Story = {}
