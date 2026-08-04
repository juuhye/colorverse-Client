import type React from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { inputVariants } from './Input'

type InputProps = React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants>

export type { InputProps }
