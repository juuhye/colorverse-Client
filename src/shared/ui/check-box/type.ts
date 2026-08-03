import type React from 'react'

type CheckBoxProps = Omit<React.ComponentProps<'button'>, 'children'> & {
  label: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export type { CheckBoxProps }
