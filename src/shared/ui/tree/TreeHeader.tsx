import { cn } from '@/shared/lib/utils/cn'
import { TreeHeaderProps } from './type'
import ArrowIcon from '../../assets/menuArrow-icon.svg?react'

export function TreeHeader({
  label,
  open,
  className,
  ...props
}: TreeHeaderProps) {
  return (
    <button
      type='button'
      aria-expanded={open}
      className={cn(
        'flex w-full items-center justify-between border-b border-button-primary-outlined px-2xs py-xs text-left text-sm font-bold',
        open ? 'rounded-t-8' : 'rounded-0',
        className
      )}
      {...props}>
      <span>{label}</span>
      <ArrowIcon className={cn('h-5 w-8', open && 'rotate-180')} />
    </button>
  )
}
