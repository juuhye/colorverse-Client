import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { IconToggleProps } from './type'
import { useControllableState } from '@/shared/lib/hooks/useControllableState'

export const iconToggleVariants = cva(
  'flex cursor-pointer items-center justify-center',
  {
    variants: {
      size: {
        sm: [
          // size
          'h-[2.2rem] w-[2.2rem]',
          // default style
          'rounded-6 border border-button-primary-outlined bg-white text-icon-tertiary-outlined',
          // hover, data-[state=on] style
          'hover:text-icon-secondary-outlined',
          'data-[state=on]:text-icon-secondary-outlined',
        ],
        md: [
          // size
          'h-[3.4rem] w-[3.4rem]',
          // default style
          'rounded-8 bg-button-toggle-primary-filled text-button-secondary-outlined',
          // hover, data-[state=on] style
          'hover:bg-white hover:text-brand-primary data-[state=on]:border',
          'data-[state=on]:border-brand-primary data-[state=on]:bg-white data-[state=on]:text-brand-primary',
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

export const IconToggle = ({
  icon,
  size,
  className,
  pressed,
  defaultPressed,
  onPressedChange,
  onClick,
  ...props
}: IconToggleProps) => {
  // on/off 기능 추가
  const [isOn, setIsOn] = useControllableState({
    prop: pressed,
    defaultProp: defaultPressed,
    onChange: onPressedChange,
  })

  return (
    <button
      className={cn(
        iconToggleVariants({
          size,
          className,
        })
      )}
      onClick={(e) => {
        setIsOn(!isOn)
        onClick?.(e) // 부모 onClick도 호출
      }}
      data-state={isOn ? 'on' : 'off'}
      aria-pressed={isOn}
      {...props}>
      <span
        aria-hidden='true'
        className='flex shrink-0 items-center justify-center'>
        {icon}
      </span>
    </button>
  )
}
