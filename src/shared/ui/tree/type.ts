import type React from 'react'

type TreeListProps = React.ComponentProps<'div'>

type TreeGroupProps = React.ComponentProps<'div'>

type TreeHeaderProps = React.ComponentProps<'button'> & {
  label: string
  open?: boolean
}

type TreeItemProps = React.ComponentProps<'div'> & {
  selected?: boolean
}

type TreeIndentProps = React.ComponentProps<'button'> & {
  depth?: number
  hasChildren?: boolean
  expanded?: boolean
  selected?: boolean
}

type TreeActionsProps = {
  className?: string
  visible?: boolean
  locked?: boolean
  selected?: boolean
}

export type {
  TreeListProps,
  TreeGroupProps,
  TreeHeaderProps,
  TreeItemProps,
  TreeIndentProps,
  TreeActionsProps,
}
