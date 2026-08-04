import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LoginInput } from './LoginInput'
import IdIcon from '@/shared/assets/id-icon.svg?react'

const meta: Meta<typeof LoginInput> = {
  title: 'Shared/LoginInput',
  component: LoginInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoginInput>

export const Default: Story = {
  args: {
    'aria-label': '아이디',
  },
}

export const WithIcon: Story = {
  args: {
    'aria-label': '아이디',
    icon: <IdIcon />,
  },
}
