import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'error', 'active'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

const STATES = ['default', 'error', 'active'] as const

export const Default: Story = {
  args: {
    state: 'default',
    placeholder: '검색어를 입력하세요',
  },
}

export const Overview: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      {STATES.map((state) => (
        <div key={state} className='flex items-center gap-4'>
          <span className='w-12 shrink-0 text-xs text-gray-400'>{state}</span>
          <Input state={state} placeholder='검색어를 입력하세요' />
        </div>
      ))}
    </div>
  ),
}

export const Error: Story = {
  args: {
    state: 'error',
    placeholder: '검색어를 입력하세요',
  },
}

export const Active: Story = {
  args: {
    state: 'active',
    placeholder: '검색어를 입력하세요',
  },
}
