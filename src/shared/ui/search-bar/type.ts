import type React from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { searchBarVariants } from './SearchBar'

type SearchBarProps = React.ComponentProps<'input'> &
  VariantProps<typeof searchBarVariants> & {}

export type { SearchBarProps }
