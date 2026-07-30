export type PanelSide = 'left' | 'right' | 'bottom'

export interface PanelProps {
  side: PanelSide
  className?: string
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}
