import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './Button'
import PlayIcon from '@/shared/assets/play-icon.svg?react'

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

const COLORS = [
  'primary',
  'gradientPrimary',
  'secondary',
  'tertiary',
  'ghost',
] as const
const SIZES = ['lg', 'md', 'sm'] as const

type MatrixProps = Omit<
  React.ComponentProps<typeof Button>,
  'size' | 'color' | 'children'
> & {
  children?: React.ReactNode
}

const Matrix = ({ children, ...props }: MatrixProps) => (
  <div className='flex flex-col gap-4'>
    {SIZES.map((size) => (
      <div key={size} className='flex items-center gap-8'>
        <span className='w-6 shrink-0 text-xs text-gray-400'>{size}</span>
        <div className='flex flex-wrap gap-4'>
          {COLORS.map((color) => (
            <Button key={color} size={size} color={color} {...props}>
              {children}
            </Button>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    children: '레이블',
    color: 'primary',
    shape: 'pill',
    size: 'sm',
    iconPosition: 'none',
  },
}

export const Overview: Story = {
  render: () => <Matrix iconPosition='none'>레이블</Matrix>,
}

export const LeftIcon: Story = {
  render: () => (
    <Matrix iconPosition='both' leftIcon={<PlayIcon />}>
      레이블
    </Matrix>
  ),
}

export const RightIcon: Story = {
  render: () => (
    <Matrix iconPosition='right' rightIcon={<PlayIcon />}>
      레이블
    </Matrix>
  ),
}

export const BothIcons: Story = {
  render: () => (
    <Matrix
      iconPosition='both'
      leftIcon={<PlayIcon />}
      rightIcon={<PlayIcon />}>
      레이블
    </Matrix>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <Matrix
      shape='circle'
      iconPosition='only'
      leftIcon={<PlayIcon />}
      aria-label='별'
    />
  ),
}
