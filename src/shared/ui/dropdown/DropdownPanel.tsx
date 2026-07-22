import { cn } from '@/shared/lib/utils/cn'
import ArrowIcon from '@/shared/assets/arrow-icon.svg?react'
import { ReactElement } from 'react'

interface DropdownPanelProps {
  offsetY?: number
  offsetX?: 'left' | 'center' | 'right'
  showArrow?: boolean
  arrow?: 'left' | 'center' | 'right'
  className?: string
  children?: ReactElement
}

const ARROW_CLASS: Record<'left' | 'center' | 'right', string> = {
  center: 'left-1/2 -translate-x-1/2',
  left: 'left-xs',
  right: 'right-xs',
}

const OFFSETX_CLASS: Record<'left' | 'center' | 'right', string> = {
  center: 'left-1/2 -translate-x-1/2',
  left: 'left-0',
  right: 'right-0',
}

export function DropdownPanel({
  offsetY = 8,
  offsetX = 'center',
  showArrow = true,
  arrow = 'center',
  className,
  children,
}: DropdownPanelProps) {
  return (
    <div
      className={cn(
        'absolute z-20 rounded-10 bg-brand-tertiary',
        OFFSETX_CLASS[offsetX],
        className
      )}
      style={{ top: `calc(100% + ${offsetY * 0.1}rem)` }}>
      {showArrow && (
        <ArrowIcon className={cn('absolute -top-4', ARROW_CLASS[arrow])} />
      )}
      {children}
    </div>
  )
}
