import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TreeHeader } from './TreeHeader'

const meta: Meta<typeof TreeHeader> = {
  title: 'Shared/Tree/TreeHeader',
  component: TreeHeader,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof TreeHeader>

export const Default: Story = {
  args: {
    label: '랜드 아이템',
    open: false,
  },
  render: (args) => (
    <div className='w-[30rem]'>
      <TreeHeader {...args} />
    </div>
  ),
}

export const Overview: Story = {
  render: () => (
    <div className='flex w-[30rem] flex-col'>
      <TreeHeader label='랜드 아이템' open />
      <TreeHeader label='아바타 아이템' />
      <TreeHeader label='프랍 아이템' />
      <TreeHeader label='애셋 아이템' />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div className='w-[30rem]'>
        <TreeHeader
          label='랜드 아이템'
          open={open}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
    )
  },
}
