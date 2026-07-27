import type React from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { iconToggleVariants } from './IconToggle'

type IconToggleProps = React.ComponentProps<'button'> &
  VariantProps<typeof iconToggleVariants> & {
    icon: React.ReactNode
    'aria-label': string
    value?: string
    pressed?: boolean
    defaultPressed?: boolean
    onPressedChange?: (pressed: boolean) => void
  }

type IconToggleGroupContextValue = {
  type: 'single' | 'multiple'
  value: string[]
  onItemToggle: (itemValue: string) => void
}

type IconToggleGroupProps = {
  type?: 'single' | 'multiple'
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  className?: string
  children: React.ReactNode
}

export type { IconToggleProps, IconToggleGroupContextValue, IconToggleGroupProps }
