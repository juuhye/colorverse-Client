import type React from 'react'

type SwitchProps = Omit<React.ComponentProps<'button'>, 'children'> & {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export type { SwitchProps }
