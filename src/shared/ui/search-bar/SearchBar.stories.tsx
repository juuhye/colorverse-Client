import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SearchBar } from './SearchBar'

const meta: Meta<typeof SearchBar> = {
  title: 'Shared/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchBar>

const SIZES = ['md', 'lg'] as const

export const Default: Story = {
  args: {
    size: 'md',
    placeholder: '검색어를 입력하세요',
  },
}

export const Overview: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      {SIZES.map((size) => (
        <div key={size} className='flex items-center gap-4'>
          <span className='w-12 shrink-0 text-xs text-gray-400'>{size}</span>
          <SearchBar size={size} placeholder='검색어를 입력하세요' />
        </div>
      ))}
    </div>
  ),
}
