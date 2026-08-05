import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TreeIndent } from './TreeIndent'

const meta: Meta<typeof TreeIndent> = {
  title: 'Shared/Tree/TreeIndent',
  component: TreeIndent,
  tags: ['autodocs'],
  argTypes: {
    depth: {
      control: 'number',
    },
    hasChildren: {
      control: 'boolean',
    },
    expanded: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof TreeIndent>

export const Default: Story = {
  args: {
    depth: 0,
    hasChildren: true,
    expanded: false,
  },
}

export const Overview: Story = {
  render: () => (
    <div className='flex flex-col gap-8 bg-background-tertiary p-8'>
      <div className='flex items-center gap-8'>
        <span className='w-24 shrink-0 text-xs text-gray-400'>
          depth 0 · collapsed
        </span>
        <TreeIndent depth={0} hasChildren expanded={false} />
      </div>
      <div className='flex items-center gap-8'>
        <span className='w-24 shrink-0 text-xs text-gray-400'>
          depth 0 · expanded + selected
        </span>
        <TreeIndent depth={0} hasChildren expanded selected />
      </div>
      <div className='flex items-center gap-8'>
        <span className='w-24 shrink-0 text-xs text-gray-400'>
          depth 1 · expanded + selected
        </span>
        <TreeIndent depth={1} hasChildren expanded selected />
      </div>
      <div className='flex items-center gap-8'>
        <span className='w-24 shrink-0 text-xs text-gray-400'>
          depth 2 · leaf (no children)
        </span>
        <TreeIndent depth={2} hasChildren={false} />
      </div>
    </div>
  ),
}
