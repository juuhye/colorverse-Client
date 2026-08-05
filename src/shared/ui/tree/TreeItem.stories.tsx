import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TreeItem } from './TreeItem'
import { TreeIndent } from './TreeIndent'
import { TreeActions } from './TreeActions'

const meta: Meta<typeof TreeItem> = {
  title: 'Shared/Tree/TreeItem',
  component: TreeItem,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof TreeItem>

const ItemIconPlaceholder = () => (
  <span
    className='block size-16 shrink-0 rounded-4 bg-basic-gray-20'
    aria-hidden='true'
  />
)

export const Default: Story = {
  render: (args) => (
    <div className='w-[30rem] bg-background-tertiary p-8'>
      <TreeItem {...args}>
        <TreeIndent depth={0} hasChildren />
        <ItemIconPlaceholder />
        <span className='flex-1'>Sky Item Instance</span>
        <TreeActions visible locked />
      </TreeItem>
    </div>
  ),
}

export const Overview: Story = {
  render: () => (
    <div className='flex w-[30rem] flex-col gap-2 bg-background-tertiary p-8'>
      <TreeItem>
        <TreeIndent depth={0} hasChildren expanded={false} />
        <ItemIconPlaceholder />
        <span className='flex-1'>Sky Item Instance</span>
        <TreeActions visible locked />
      </TreeItem>
      <TreeItem selected>
        <TreeIndent depth={0} hasChildren expanded selected />
        <ItemIconPlaceholder />
        <span className='flex-1'>Base Parts Item Instance</span>
        <TreeActions visible locked />
      </TreeItem>
      <TreeItem>
        <TreeIndent depth={1} hasChildren expanded selected />
        <ItemIconPlaceholder />
        <span className='flex-1'>Building Item Instance</span>
        <TreeActions visible={false} locked />
      </TreeItem>
      <TreeItem>
        <TreeIndent depth={2} hasChildren={false} />
        <ItemIconPlaceholder />
        <span className='flex-1'>Furniture Item</span>
        <TreeActions visible locked />
      </TreeItem>
    </div>
  ),
}
