import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TreeList } from './TreeList'
import { TreeHeader } from './TreeHeader'
import { TreeGroup } from './TreeGrop'
import { TreeItem } from './TreeItem'
import { TreeIndent } from './TreeIndent'
import { TreeActions } from './TreeActions'
import { useTreeStore } from '@/features/land-builder/panel/model/useTreeStore'

const meta: Meta<typeof TreeList> = {
  title: 'Shared/Tree/TreeList',
  component: TreeList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TreeList>

const ItemIconPlaceholder = () => (
  <span
    className='block size-16 shrink-0 rounded-4 bg-basic-gray-20'
    aria-hidden='true'
  />
)

export const Default: Story = {
  render: () => (
    <div className='w-[30rem]'>
      <TreeList>
        <TreeHeader label='랜드 아이템' open />
        <TreeGroup>
          <TreeItem>
            <TreeIndent depth={0} hasChildren />
            <ItemIconPlaceholder />
            <span className='flex-1'>Sky Item Instance</span>
            <TreeActions visible locked />
          </TreeItem>
        </TreeGroup>
      </TreeList>
    </div>
  ),
}

export const Overview: Story = {
  render: () => (
    <div className='w-[30rem]'>
      <TreeList>
        <TreeHeader label='랜드 아이템' open />
        <TreeGroup>
          <TreeItem>
            <TreeIndent depth={0} hasChildren expanded={false} />
            <ItemIconPlaceholder />
            <span className='flex-1'>Sky Item Instance</span>
            <TreeActions visible locked />
          </TreeItem>
          <TreeItem>
            <TreeIndent depth={0} hasChildren expanded={false} />
            <ItemIconPlaceholder />
            <span className='flex-1'>Nature Item Instance</span>
            <TreeActions visible={false} locked />
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
          <TreeItem>
            <TreeIndent depth={2} hasChildren={false} />
            <ItemIconPlaceholder />
            <span className='flex-1'>Furniture</span>
            <TreeActions visible={false} locked />
          </TreeItem>
          <TreeItem>
            <TreeIndent depth={0} hasChildren expanded={false} />
            <ItemIconPlaceholder />
            <span className='flex-1'>Item Instance (Use Only)</span>
            <TreeActions visible={false} locked />
          </TreeItem>
          <TreeItem>
            <TreeIndent depth={0} hasChildren expanded={false} />
            <ItemIconPlaceholder />
            <span className='flex-1'>Item Instance (Use Only)</span>
            <TreeActions visible={false} locked />
          </TreeItem>
          <TreeItem>
            <TreeIndent depth={0} hasChildren expanded={false} />
            <ItemIconPlaceholder />
            <span className='flex-1'>Item Instance (Use Only)</span>
            <TreeActions visible={false} locked />
          </TreeItem>
        </TreeGroup>
        <TreeHeader label='아바타 아이템' />
        <TreeHeader label='프랍 아이템' />
        <TreeHeader label='애셋 아이템' />
      </TreeList>
    </div>
  ),
}

const interactiveTreeData = [
  {
    id: 'sky',
    label: 'Sky Item Instance',
    children: [
      { id: 'sky-1', label: 'Sky Sub Item 1' },
      { id: 'sky-2', label: 'Sky Sub Item 2' },
    ],
  },
  {
    id: 'nature',
    label: 'Nature Item Instance',
    children: [{ id: 'nature-1', label: 'Nature Sub Item' }],
  },
]

export const Interactive: Story = {
  render: () => {
    const expandedIds = useTreeStore((state) => state.expandedIds)
    const toggleExpanded = useTreeStore((state) => state.toggleExpanded)

    return (
      <div className='w-[30rem]'>
        <TreeList>
          <TreeHeader label='랜드 아이템' open />
          <TreeGroup>
            {interactiveTreeData.map((parent) => {
              const expanded = expandedIds.has(parent.id)
              return (
                <div key={parent.id}>
                  <TreeItem>
                    <TreeIndent
                      depth={0}
                      hasChildren
                      expanded={expanded}
                      aria-label={parent.label}
                      onClick={() => toggleExpanded(parent.id)}
                    />
                    <ItemIconPlaceholder />
                    <span className='flex-1'>{parent.label}</span>
                    <TreeActions visible locked />
                  </TreeItem>
                  {expanded &&
                    parent.children.map((child) => (
                      <TreeItem key={child.id}>
                        <TreeIndent depth={1} hasChildren={false} />
                        <ItemIconPlaceholder />
                        <span className='flex-1'>{child.label}</span>
                        <TreeActions visible locked />
                      </TreeItem>
                    ))}
                </div>
              )
            })}
          </TreeGroup>
        </TreeList>
      </div>
    )
  },
}
