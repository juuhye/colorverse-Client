import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Panel } from './Panel'

const meta: Meta<typeof Panel> = {
  title: 'Shared/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right', 'bottom'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Panel>

export const Left: Story = {
  args: {
    side: 'left',
    defaultOpen: true,
  },
  render: (args) => (
    <div className='relative h-[60rem] bg-gray-100 p-sm'>
      <Panel {...args}>
        <div className='p-4'>좌측 패널 내용</div>
      </Panel>
    </div>
  ),
}

export const Right: Story = {
  args: {
    side: 'right',
    defaultOpen: true,
  },
  render: (args) => (
    <div className='relative h-[60rem] bg-gray-100 p-sm'>
      <Panel {...args}>
        <div className='p-4'>우측 패널 내용</div>
      </Panel>
    </div>
  ),
}

export const Bottom: Story = {
  args: {
    side: 'bottom',
    defaultOpen: true,
  },
  render: (args) => (
    <div className='relative flex h-[60rem] flex-col justify-end bg-gray-100 p-sm'>
      <Panel {...args}>
        <div className='p-4'>하단 패널 내용</div>
      </Panel>
    </div>
  ),
}

export const Overview: Story = {
  render: () => (
    <div className='absolute top-0 left-0 flex h-[60rem] w-full flex-col overflow-hidden p-sm'>
      <div className='relative flex-1'>
        <Panel side='left'>
          <div className='p-4'>좌측 패널 내용</div>
        </Panel>

        <Panel side='right'>
          <div className='p-4'>우측 패널 내용</div>
        </Panel>
      </div>

      <Panel side='bottom'>
        <div className='p-4'>하단 패널 내용</div>
      </Panel>
    </div>
  ),
}
