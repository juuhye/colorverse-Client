import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DropdownPanel } from './DropdownPanel'

const meta: Meta<typeof DropdownPanel> = {
  title: 'Shared/DropdownPanel',
  component: DropdownPanel,
  tags: ['autodocs'],
  argTypes: {
    arrow: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof DropdownPanel>

export const Default: Story = {
  args: {
    showArrow: true,
    arrow: 'center',
  },
  render: (args) => (
    <div className='relative h-40'>
      <DropdownPanel {...args}>
        <div className='p-4 text-white'>드롭다운 내용</div>
      </DropdownPanel>
    </div>
  ),
}
