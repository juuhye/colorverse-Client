import { useState } from 'react'
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
    pressed: {
      control: 'boolean',
    },
    defaultPressed: {
      control: 'boolean',
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
        <IconToggle size={size} icon={<ViewIcon />} defaultPressed={false} aria-label='토글' />
        <IconToggle size={size} icon={<ViewIcon />} defaultPressed={true} aria-label='토글' />
      </div>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    size: 'sm',
    icon: <ViewIcon />,
    'aria-label': '토글',
  },
}

export const Overview: Story = {
  render: () => <Matrix />,
}

export const Uncontrolled: Story = {
  render: () => (
    <IconToggle
      icon={<ViewIcon />}
      defaultPressed={false}
      aria-label='토글'
    />
  ),
}

export const Controlled: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false)
    return (
      <div className='flex flex-col gap-4'>
        <IconToggle
          icon={<ViewIcon />}
          pressed={pressed}
          onPressedChange={setPressed}
          aria-label='토글'
        />
        <span className='text-xs text-gray-400'>
          현재 상태: {pressed ? 'on' : 'off'}
        </span>
      </div>
    )
  },
}
