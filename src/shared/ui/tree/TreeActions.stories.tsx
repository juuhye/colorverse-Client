import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TreeActions } from './TreeActions'

const meta: Meta<typeof TreeActions> = {
  title: 'Shared/Tree/TreeActions',
  component: TreeActions,
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
    },
    locked: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof TreeActions>

export const Default: Story = {
  args: {
    visible: true,
    locked: true,
  },
}

export const Overview: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-16'>
        <span className='w-40 shrink-0 text-xs text-gray-400'>
          visible / locked
        </span>
        <TreeActions visible locked />
      </div>
      <div className='flex items-center gap-16'>
        <span className='w-40 shrink-0 text-xs text-gray-400'>
          hidden / locked
        </span>
        <TreeActions visible={false} locked />
      </div>
      <div className='flex items-center gap-16'>
        <span className='w-40 shrink-0 text-xs text-gray-400'>
          hidden / unlocked
        </span>
        <TreeActions visible={false} locked={false} />
      </div>
    </div>
  ),
}
