import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Shared/Switch',
  component: Switch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    'data-checked': true,
  },
}

export const Overview: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <Switch data-unchecked />
      <Switch data-checked />
    </div>
  ),
}
