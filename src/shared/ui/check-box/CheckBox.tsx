'use client'

import { cn } from '@/shared/lib/utils/cn'
import { useControllableState } from '@/shared/lib/hooks/useControllableState'
import { CheckBoxProps } from './type'
import CheckIcon from '@/shared/assets/check-icon.svg?react'

export function CheckBox({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  onClick,
  className,
  ...props
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useControllableState({
    prop: checked,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
  })

  return (
    <label className='inline-flex cursor-pointer items-center gap-8'>
      <button
        {...props}
        type='button'
        role='checkbox'
        aria-checked={isChecked}
        data-slot='checkbox'
        data-checked={isChecked || undefined}
        data-unchecked={!isChecked || undefined}
        onClick={(e) => {
          setIsChecked(!isChecked)
          onClick?.(e) // 부모 onClick도 호출
        }}
        className={cn(
          'group flex size-[1.9rem] shrink-0 cursor-pointer items-center justify-center rounded-4 border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
          'data-checked:border-brand-primary data-checked:bg-brand-primary data-unchecked:border-button-primary-outlined data-unchecked:bg-[#F9FAFD]',
          className
        )}>
        <CheckIcon
          className={cn(
            'h-[0.7rem] w-[1.1rem]',
            'group-data-checked:text-white group-data-unchecked:text-button-secondary-outlined group-data-unchecked:opacity-15'
          )}
          aria-hidden='true'
        />
      </button>
      <span className='text-xs font-medium text-button-secondary-outlined'>
        {label}
      </span>
    </label>
  )
}
