'use client'

import { cn } from '@/shared/lib/utils/cn'
import { useControllableState } from '@/shared/lib/hooks/useControllableState'
import { SwitchProps } from './type'

export function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  onClick,
  className,
  ...props
}: SwitchProps) {
  const [isChecked, setIsChecked] = useControllableState({
    prop: checked,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
  })

  return (
    <button
      {...props}
      type='button'
      role='switch'
      aria-checked={isChecked}
      data-slot='switch'
      data-checked={isChecked || undefined}
      data-unchecked={!isChecked || undefined}
      onClick={(e) => {
        setIsChecked(!isChecked)
        onClick?.(e) // 부모 onClick도 호출
      }}
      className={cn(
        'peer group/switch relative inline-flex shrink-0 items-center rounded-full transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
        // size
        'h-14 w-[3rem]',
        // color
        'data-checked:bg-brand-primary data-unchecked:bg-gray-500',
        className
      )}>
      <span
        data-slot='switch-thumb'
        className={cn(
          'pointer-events-none block rounded-full transition-transform',
          // size
          'size-16',
          // position
          'translate-x-full group-data-unchecked/switch:translate-x-0',
          // color
          'bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_0_2px_#fff]'
        )}
      />
    </button>
  )
}
