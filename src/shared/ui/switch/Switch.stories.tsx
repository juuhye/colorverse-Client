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
    'aria-label': '토글',
    defaultChecked: true,
  },
}

export const Overview: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <Switch aria-label='토글' defaultChecked={false} />
      <Switch aria-label='토글' defaultChecked={true} />
    </div>
  ),
}
