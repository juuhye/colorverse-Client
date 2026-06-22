import type React from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { iconToggleVariants } from './IconToggle'

type IconToggleProps = React.ComponentProps<'button'> &
  VariantProps<typeof iconToggleVariants> & {
    icon: React.ReactNode
    'aria-label': string
  }

export type { IconToggleProps }
