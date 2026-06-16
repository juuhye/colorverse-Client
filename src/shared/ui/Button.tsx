import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ButtonProps } from './type'

export const buttonVariants = cva(
  'flex cursor-pointer items-center text-xs text-white',
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
        pill: 'rounded-xl',
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
        // left: 'pr-6 pl-4',
        right: 'pr-2xs pl-6',
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
    ],

    defaultVariants: {
      color: 'primary',
      shape: 'pill',
      size: 'sm',
    },
  }
)

export const Button = ({
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
          className='flex size-18 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg_*]:fill-current'>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span
          aria-hidden='true'
          className='flex size-18 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg_*]:fill-current'>
          {rightIcon}
        </span>
      )}
    </button>
  )
}
