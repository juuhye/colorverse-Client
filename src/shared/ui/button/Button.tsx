import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ButtonProps } from './type'

export const buttonVariants = cva(
  'flex cursor-pointer items-center gap-8 text-sm text-white',
  {
    variants: {
      // 버튼 컬러 타입 정의
      color: {
        primary: '',
        gradientPrimary: '',
        secondary: '',
        tertiary: '',
        ghost: '',
        icon: '',
      },
      // 버튼 라운드 정의
      shape: {
        // 100% rounded
        pill: 'rounded-12',
        // deflaut rounded
        rounded: 'rounded-8',
        // only icon
        circle: 'rounded-full',
      },
      // 버튼 사이즈 정의 (텍스트, gap, padding)
      size: {
        sm: 'h-[3rem]',
        md: 'h-[3.4rem]',
        lg: 'h-[3.7rem]',
      },
      // icon 위치 및 유무 스타일 정의 (padding)
      iconPosition: {
        none: 'px-[5rem]',
        left: 'pr-20 pl-2xs',
        right: 'pr-2xs pl-20',
        both: 'pr-2xs pl-xs',
        only: 'p-8',
      },
    },

    compoundVariants: [
      {
        color: 'primary',
        class: 'bg-brand-primary hover:bg-brand-primary-over',
      },
      {
        color: 'gradientPrimary',
        class:
          'bg-gradient-brand-primary hover:bg-gradient-brand-primary-pressed active:bg-gradient-brand-active',
      },
      {
        color: 'secondary',
        class: 'bg-gray-default hover:bg-gray-weaker active:bg-gray-weaker',
      },
      {
        color: 'tertiary',
        class:
          'border border-button-popup-outlined bg-button-primary-filled text-button-secondary-outlined hover:bg-button-popup-outlined',
      },
      {
        color: 'ghost',
        class: 'bg-[#242529] hover:bg-[#242529]/30 active:bg-[#242529]/70',
      },
      {
        color: 'icon',
        class: 'text-[#8083A3] hover:text-white active:text-white',
      },
    ],

    defaultVariants: {
      color: 'primary',
      shape: 'pill',
      size: 'sm',
      iconPosition: 'none',
    },
  }
)

export const Button = ({
  type,
  color,
  shape,
  size,
  iconPosition,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type ?? 'button'}
      className={cn(
        buttonVariants({
          color,
          shape,
          size,
          iconPosition,
          className,
        })
      )}
      {...props}>
      {leftIcon && (
        <span
          aria-hidden='true'
          className='flex shrink-0 items-center justify-center'>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span
          aria-hidden='true'
          className='flex shrink-0 items-center justify-center'>
          {rightIcon}
        </span>
      )}
    </button>
  )
}
