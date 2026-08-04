import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CheckBox } from './CheckBox'

const meta: Meta<typeof CheckBox> = {
  title: 'Shared/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    label: '체크박스',
    defaultChecked: false,
  },
}

export const Overview: Story = {
  render: () => (
    <div className='flex items-center gap-16'>
      <CheckBox label='체크박스' defaultChecked={false} />
      <CheckBox label='체크박스' defaultChecked={true} />
    </div>
  ),
}
