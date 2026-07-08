import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from './Input'
import IdIcon from '@/shared/assets/id-icon.svg?react'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {},
}

export const WithIcon: Story = {
  args: {
    icon: <IdIcon />,
  },
}
