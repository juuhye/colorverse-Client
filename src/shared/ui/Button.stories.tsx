import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'gradientPrimary',
        'secondary',
        'tertiary',
        'ghost',
        'icon',
      ],
    },
    shape: {
      control: 'select',
      options: ['pill', 'rounded', 'circle'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'right', 'both', 'only'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

const StarIcon = () => (
  <svg viewBox='0 0 24 24' width='100%' height='100%' fill='currentColor'>
    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
  </svg>
)

export const Default: Story = {
  args: {
    children: '버튼',
    color: 'primary',
    shape: 'pill',
    size: 'sm',
    iconPosition: 'none',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    iconPosition: 'none',
  },
}

export const GradientPrimary: Story = {
  args: {
    children: 'Gradient Primary',
    color: 'gradientPrimary',
    iconPosition: 'none',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    color: 'secondary',
    iconPosition: 'none',
  },
}

export const SizeSm: Story = {
  args: {
    children: 'Small (3rem)',
    size: 'sm',
    iconPosition: 'none',
  },
}

export const SizeMd: Story = {
  args: {
    children: 'Medium (3.4rem)',
    size: 'md',
    iconPosition: 'none',
  },
}

export const SizeLg: Story = {
  args: {
    children: 'Large (3.7rem)',
    size: 'lg',
    iconPosition: 'none',
  },
}

export const ShapePill: Story = {
  args: {
    children: 'Pill',
    shape: 'pill',
    iconPosition: 'none',
  },
}

export const ShapeRounded: Story = {
  args: {
    children: 'Rounded',
    shape: 'rounded',
    iconPosition: 'none',
  },
}

export const ShapeCircle: Story = {
  args: {
    shape: 'circle',
    iconPosition: 'only',
    leftIcon: <StarIcon />,
    'aria-label': '별',
  },
}

export const WithRightIcon: Story = {
  args: {
    children: '아이콘 버튼',
    iconPosition: 'right',
    rightIcon: <StarIcon />,
    'aria-label': '별',
  },
}

export const WithBothIcons: Story = {
  args: {
    children: '양쪽 아이콘',
    iconPosition: 'both',
    leftIcon: <StarIcon />,
    rightIcon: <StarIcon />,
    'aria-label': '별',
  },
}

export const IconOnly: Story = {
  args: {
    shape: 'circle',
    iconPosition: 'only',
    leftIcon: <StarIcon />,
    'aria-label': '별',
  },
}
