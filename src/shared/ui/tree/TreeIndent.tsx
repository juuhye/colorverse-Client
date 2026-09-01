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
      {hasChildren && (
        <button
          type='button'
          aria-expanded={expanded}
          aria-label={expanded ? '접기' : '펼치기'}
          className={cn(
            'flex shrink-0 rotate-180 items-center justify-center rounded-full',
            selected && expanded
              ? depth === 0
                ? 'border-0 bg-brand-primary text-white'
                : 'border border-brand-primary text-brand-primary'
              : 'text-icon-primary-outlined',
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
      )}
    </span>
  )
}
