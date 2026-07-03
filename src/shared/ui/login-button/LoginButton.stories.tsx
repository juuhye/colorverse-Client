import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LoginButton } from './LoginButton'
import IconGoggle from '@/shared/assets/goggle-icon.svg?react'
import IconKakao from '@/shared/assets/kakao-icon.svg?react'

const meta: Meta<typeof LoginButton> = {
  title: 'Shared/LoginButton',
  component: LoginButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoginButton>

export const Default: Story = {
  args: {
    label: '이메일로 로그인',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Google로 로그인',
    icon: <IconGoggle />,
  },
}

export const Kakao: Story = {
  args: {
    label: '카카오 로그인',
    icon: <IconKakao />,
    className: 'bg-[#FEE500] border-0',
  },
}
