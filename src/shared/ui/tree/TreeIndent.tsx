import { cn } from '@/shared/lib/utils/cn'
import { TreeIndentProps } from './type'
import MenuArrowIcon from '../../assets/menuArrow-icon.svg?react'

export function TreeIndent({
  depth = 0,
  hasChildren,
  expanded,
  selected,
  className,
  ...props
}: TreeIndentProps) {
  return (
    <span
      className='flex shrink-0 items-center'
      style={{ paddingLeft: `${depth * 3.2}rem` }}>
      {hasChildren ? (
        <button
          type='button'
          aria-expanded={expanded}
          className={cn(
            'flex shrink-0 items-center justify-center rounded-full',
            selected && expanded
              ? 'border-0 bg-brand-primary text-white'
              : 'text-icon-tertiary-outlined',
            className
          )}
          {...props}>
          <span
            aria-hidden='true'
            className={cn(
              'flex size-[2.2rem] rotate-90 items-center justify-center rounded-full border border-button-secondary-filled',
              expanded && 'rotate-180 border-0'
            )}>
            <MenuArrowIcon className='h-5 w-8' />
          </span>
        </button>
      ) : (
        <span className='size-20 shrink-0' aria-hidden='true' />
      )}
    </span>
  )
}
