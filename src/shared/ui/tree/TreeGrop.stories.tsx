import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TreeGroup } from './TreeGrop'
import { TreeItem } from './TreeItem'
import { TreeIndent } from './TreeIndent'
import { TreeActions } from './TreeActions'

const meta: Meta<typeof TreeGroup> = {
  title: 'Shared/Tree/TreeGroup',
  component: TreeGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TreeGroup>

const ItemIconPlaceholder = () => (
  <span
    className='block size-16 shrink-0 rounded-4 bg-basic-gray-20'
    aria-hidden='true'
  />
)

export const Default: Story = {
  render: () => (
    <div className='w-[30rem] bg-background-tertiary'>
      <TreeGroup>
        <TreeItem>
          <TreeIndent depth={0} hasChildren />
          <ItemIconPlaceholder />
          <span className='flex-1'>Sky Item Instance</span>
          <TreeActions visible locked />
        </TreeItem>
        <TreeItem>
          <TreeIndent depth={0} hasChildren />
          <ItemIconPlaceholder />
          <span className='flex-1'>Nature Item Instance</span>
          <TreeActions visible={false} locked />
        </TreeItem>
      </TreeGroup>
    </div>
  ),
}
