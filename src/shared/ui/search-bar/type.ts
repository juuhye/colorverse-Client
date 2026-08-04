import type React from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { SearchBarVariants } from './SearchBar'

type SearchBarProps = Omit<React.ComponentProps<'input'>, 'size'> &
  VariantProps<typeof SearchBarVariants>

export type { SearchBarProps }
