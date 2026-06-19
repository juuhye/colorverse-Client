import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconToggle } from './IconToggle'
import ViewIcon from '@/shared/assets/view-icon.svg?react'

const meta: Meta<typeof IconToggle> = {
  title: 'Shared/IconToggle',
  component: IconToggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof IconToggle>

const SIZES = ['lg', 'md', 'sm'] as const

const Matrix = () => (
  <div className='flex flex-col gap-4'>
    {SIZES.map((size) => (
      <div key={size} className='flex items-center gap-8'>
        <span className='w-6 shrink-0 text-xs text-gray-400'>{size}</span>
        <IconToggle size={size} icon={<ViewIcon />} />
      </div>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    size: 'sm',
    icon: <ViewIcon />,
  },
}

export const Overview: Story = {
  render: () => <Matrix />,
}
