import { useContext } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils/cn'
import { IconToggleGroupProps, IconToggleProps } from './type'
import { useControllableState } from '@/shared/lib/hooks/useControllableState'
import { IconToggleGroupContext } from './IconToggleGroupContext'

export const iconToggleVariants = cva(
  'flex cursor-pointer items-center justify-center',
  {
    variants: {
      size: {
        xs: [
          // size
          'h-[2.2rem] w-[2.2rem]',
          // default style
          'rounded-6 border border-button-primary-outlined bg-white text-icon-tertiary-outlined',
          // hover, data-[state=on] style
          'hover:text-icon-secondary-outlined',
          'data-[state=on]:text-icon-secondary-outlined',
        ],
        sm: [
          // size
          'h-[3.4rem] w-[3.4rem]',
          // default style
          'rounded-8 bg-button-toggle-primary-filled text-button-secondary-outlined',
          // hover, data-[state=on] style
          'hover:bg-white hover:text-brand-primary data-[state=on]:border',
          'data-[state=on]:border-brand-primary data-[state=on]:bg-white data-[state=on]:text-brand-primary',
        ],
        md: [
          // size
          'h-[3.4rem] w-[3.4rem]',
          // default style
          'text-icon-primary-outlined',
          // hover, data-[state=on] style
          'data-[state=on]:text-white',
        ],

        lg: [
          // size
          'h-3xl w-[6.8rem]',
          // default style
          'rounded-12 bg-white text-button-secondary-outlined shadow-[0_2px_6px_0_rgba(13,13,13,0.04)]',
          // hover, data-[state=on] style
          'data-[state=on]:border data-[state=on]:border-brand-primary data-[state=on]:text-brand-primary',
        ],
      },
    },

    defaultVariants: {
      size: 'sm',
    },
  }
)

export const IconToggleGroup = ({
  type = 'single',
  value,
  defaultValue,
  onValueChange,
  className,
  children,
}: IconToggleGroupProps) => {
  const [selected, setSelected] = useControllableState<string[]>({
    prop: value,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
  })
  const currentValue = selected ?? []

  const onItemToggle = (itemValue: string) => {
    if (type === 'single') {
      setSelected(currentValue.includes(itemValue) ? [] : [itemValue])
      return
    }
    setSelected(
      currentValue.includes(itemValue)
        ? currentValue.filter((v) => v !== itemValue)
        : [...currentValue, itemValue]
    )
  }

  return (
    <div
      className={cn('flex items-center', className)}
      role={type === 'single' ? 'radiogroup' : 'group'}>
      <IconToggleGroupContext.Provider
        value={{ type, value: currentValue, onItemToggle }}>
        {children}
      </IconToggleGroupContext.Provider>
    </div>
  )
}

export const IconToggle = ({
  icon,
  size,
  className,
  value,
  pressed,
  defaultPressed,
  onPressedChange,
  onClick,
  ...props
}: IconToggleProps) => {
  const group = useContext(IconToggleGroupContext)

  // on/off 기능 추가 (그룹 밖에서 standalone으로 쓰일 때만 사용)
  const [isOn, setIsOn] = useControllableState({
    prop: pressed,
    defaultProp: defaultPressed ?? false,
    onChange: onPressedChange,
  })

  const isPressed = group
    ? value !== undefined && group.value.includes(value)
    : isOn

  return (
    <button
      className={cn(
        iconToggleVariants({
          size,
          className,
        })
      )}
      onClick={(e) => {
        if (group) {
          if (value !== undefined) {
            group.onItemToggle(value)
          }
        } else {
          setIsOn(!isOn)
        }
        onClick?.(e) // 부모 onClick도 호출
      }}
      data-state={isPressed ? 'on' : 'off'}
      role={group?.type === 'single' ? 'radio' : undefined}
      aria-checked={group?.type === 'single' ? isPressed : undefined}
      aria-pressed={group?.type === 'single' ? undefined : isPressed}
      {...props}>
      <span
        aria-hidden='true'
        className='flex shrink-0 items-center justify-center'>
        {icon}
      </span>
    </button>
  )
}
