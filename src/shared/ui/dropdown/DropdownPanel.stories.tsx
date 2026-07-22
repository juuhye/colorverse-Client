import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DropdownPanel } from './DropdownPanel'

const meta: Meta<typeof DropdownPanel> = {
  title: 'Shared/DropdownPanel',
  component: DropdownPanel,
  tags: ['autodocs'],
  argTypes: {
    arrow: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof DropdownPanel>

export const Default: Story = {
  args: {
    arrow: 'center',
  },
}
